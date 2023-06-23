const pool = require("../../db");
const queries = require("./queries");

const getKnits = (req,res) => {
    pool.query(queries.getKnits, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);

    }
    );
};
const getKnitById = (req,res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getKnitById,[id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);

    }
    );
};

const addKnit = (req,res) => {
    const {gender, collection, _class, subclass, season, fabrication, fit, drop, style_count, style, style_color, color_name, cost, retail, quantity, cost_value, retail_value, comments, label_of_sizes, assortment, delivery_date, supplier, bal, XS, S, M, L, XL, _24, _26, _28, _30, _32, _34, _36, _38, _6_7y, _7_8y, _8_9y, _9_10y, _10_11y, _11_12y, _13_14y, _6_12m, _12_18m, _18_24m, _2_3y, _3_4y, _4_5y  } = req.body;
   
    // pool.query(queries.checkRepeatCollection,[style_colar], (error, results) => {
    //     if (results.rows.length) {
    //     res.send("Collection already exist.");}

        
    pool.query(queries.addKnit,[gender, collection, _class, subclass, season, fabrication, fit, drop, style_count, style, style_color, color_name, cost, retail, quantity, cost_value, retail_value, comments, label_of_sizes, assortment, delivery_date, supplier, bal, XS, S, M, L, XL, _24, _26, _28, _30, _32, _34, _36, _38, _6_7y, _7_8y, _8_9y, _9_10y, _10_11y, _11_12y, _13_14y, _6_12m, _12_18m, _18_24m, _2_3y, _3_4y, _4_5y ], (error, results) =>{
        if (error) throw error;
        res.status(201).send("knit collection created successfully");
    }
    );
    
    }
//     );
// };

const deleteKnit= (req,res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getKnitById, [id], (error, results) => {
        const noStudentFound = !results.rows.length;
    if(noStudentFound){
            res.send("knit record does not exist in the database")
        } 
        pool.query(queries.deleteKnit,[id], (error, results) => {
            if (error) throw error;
            res.status(200).send("knit record removed successfully");
    

    }
    );
});
};


const updateKnit= (req,res) => {
    const id = parseInt(req.params.id);
    const {gender}=req.body;
    pool.query(queries.getKnitById, [id], (error, results) => {
        const noStudentFound = !results.rows.length;
    if(noStudentFound){
            res.send("knit record does not exist in the database")
        } 
        pool.query(queries.updateKnit,[gender, id], (error, results) => {
            if (error) throw error;
            res.status(200).send("knit record updated successfully");
    

    }
    );
});
};


 
module.exports= {
    getKnits,
    getKnitById,
    addKnit,
    deleteKnit,
    updateKnit,
};