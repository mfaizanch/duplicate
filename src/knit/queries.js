const getKnits = "SELECT * FROM knit";
const getKnitById= "SELECT * FROM knit WHERE id = $1";
// const checkRepeatCollection= "SELECT s FROM knit WHERE s.style_collar = $1";
const addKnit= "INSERT INTO knit (gender, collection, _class, subclass, season, fabrication, fit, drop, style_count, style, style_color, color_name, cost, retail, quantity, cost_value, retail_value, comments, label_of_sizes, assortment, delivery_date, supplier, bal, XS, S, M, L, XL, _24, _26, _28, _30, _32, _34, _36, _38, _6_7y, _7_8y, _8_9y, _9_10y, _10_11y, _11_12y, _13_14y, _6_12m, _12_18m, _18_24m, _2_3y, _3_4y, _4_5y ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, $38, $39, $40, $41, $42, $43, $44, $45, $46, $47, $48, $49)";
const deleteKnit= "DELETE  FROM knit WHERE id = $1";
const updateKnit= "UPDATE knit SET gender = $1 where id= $2";


module.exports= {
    getKnits,
    getKnitById,
    // checkRepeatCollection,
    addKnit,
    deleteKnit,
    updateKnit,
};