
import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({extended : true}));

app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get("/",(req,res)=>{
    res.render("index.ejs");
});

app.get("/create_blog",(req,res)=>{
    res.render("create_blog.ejs");
});

let obj = {
    name : "Hello",
    items : [],

    items2 : [],
}

app.get("/view_blogs",(req,res)=>{
    
    res.render("jjj.ejs",obj);
});

app.post("/submit",(req,res)=>{
    var inputText = req.body.title_text;

    var inputText2 = req.body.paragraph_text;

    obj.items2.push(inputText2);


    obj.items.push(inputText);

    
    res.render("jjj.ejs",obj);
});

app.post("/view",(req,res)=>{
    var i1 = req.body.view_text;

    var t1 = obj.items[Number(i1)-1];

    var b1 = obj.items2[Number(i1)-1];

    res.render("view_blogs",{
        viewTitle : t1,
        viewBlog : b1,
    });


})

app.post("/delete",(req,res)=>{
    var i2 = Number(req.body.delete_text);

    obj.items.splice(i2-1,1);
    obj.items2.splice(i2-1,1);

    res.render("jjj.ejs",obj);
})

app.listen(3000,()=>{
    console.log("server is running in localhost:3000");
});


  