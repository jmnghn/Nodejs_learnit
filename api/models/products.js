const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String },
    price: { type: String }
});

// 위에 설정한 스킴값으로 Product model 생성
module.exports = mongoose.model('Product', productSchema);