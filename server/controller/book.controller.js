const Book = require("./../model/book.model");
const stripe = require("stripe")(
  "sk_test_51Mtr7eSBqFv0HNgeWwDtjfcAkN15T6FCDfjeNdAvmGntI4d7nhs2VTdewDHaMjxpqaxEuk2aiWtDmh0UBT3jao1F00gTr5tzyF"
);
// console.log(process.env.STRIPE_SECRET_KEY)

const createBook = async (req, res) => {
  const { bookName, description, authorName, price } = req.body;
  try {
    if (!bookName || !description || !price) {
      res.status(400).json({
        message: "all filed is Required!",
      });
    }
    const book = await Book.create({
      bookName: bookName,
      description: description,
      authorName: authorName,
      price: price,
      coverImgUrl: `${req.file.destination}/${req.file.filename}`,
    });
    res.status(200).json({
      data: book,
      message: "book created !",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const allBook = async (req, res) => {
  try {
    // const page = parseInt(req.query.page, 10) || 0;
    // const limit = parseInt(req.query.limit, 10) || 4;
    // const book = await Book.find().populate("authorName",{fullName:1,_id:0});
    const book = await Book.find()
      // .limit(limit)
      // .skip(limit * page);
    if (book) {
      res.status(200).json({
        data: book,
        // pagination: { page: page, limit: limit, count: book.length },
        message: "fetch book succussfully",
      });
    } else {
      res.status(400).json({
        message: "no Record Avalible!",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const singleBook = async (req, res) => {
  try {
    const book = await Book.find({ _id: req.params._id });
    if (book) {
      res.status(200).json({
        data: book,
        message: "fetch single Book succussfully",
      });
    } else {
      res.status(400).json({
        message: "no Record Avalible!",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete({ _id: req.params._id });
    if (!book) {
      res.status(400).json({
        data: book,
        message: "currently No Book here...",
      });
    } else {
      res.status(200).json({
        message: "delete Book !",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateBook = async (req, res) => {
  const { _id } = req.params;
  try {
    const book = await Book.findByIdAndUpdate(_id, req.body, { new: true });
    if (book === null) {
      res.status(400).json({
        message: "Book Not Aviable",
      });
    } else {
      res.status(200).json({
        data: book,
        message: "Book Update sucessfully",
      });
    }
  } catch (error) {
    res.status(200).json({
      message: error.message,
    });
  }
};

const createSession = async (req, res) => {
  // try {
  const { success_url, cancel_url, price, quantity, mode } = req.body;

  const session = await stripe.checkout.sessions.create({
    success_url,
    cancel_url,
    line_items: [{ price, quantity }],
    mode,
  });
  res.json(session);
  // } catch (err) {
  //   res.json(err);
  // }
};

// const retrieveSession = catchAsync(async (req, res) => {
//   const {
//     body: { user_id, subscription_id, session_id },
//   } = req;
//   const session = await stripe.checkout.sessions.retrieve(session_id);
//   const { id, payment_status, subscription } = session;
//   const days = JSON.parse(MONTHLY_PLAN);
//   const expires_at = getPlanExpiry(days);
//   let payload = {
//     user_id,
//     subscription_id,
//     session_id: id,
//     payment_status,
//     subscription_key: subscription,
//     expires_at,
//   };
//   if (payment_status == PAID_PAYMENT_STATUS) {
//     await user_subscriptions.destroy({ where: { user_id } });
//     const data = await user_subscriptions.create(payload);
//     res.json(successData("success", data));
//   } else {
//     const data = await user_subscriptions.findOne({ where: { user_id } });
//     res.json(successData("success", data));
//   }
// });

module.exports = {
  createBook,
  allBook,
  singleBook,
  deleteBook,
  updateBook,
  // ,retrieveSession ,
  createSession,
};
