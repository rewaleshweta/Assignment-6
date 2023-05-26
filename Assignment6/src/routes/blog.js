const router = require('express').Router();
const Blog = require('../models/Blog')

// Your routing code goes her
router.get('/blog',(req,res)=>{
    const blogid=Number(req.query.id)
    let fltr={}
    if(blogid){
        fltr={
            id:blogid
        }
    }
    let X=Blog.find(fltr)
    console.log(X)
    X.then((data)=>{
        console.log(data)
        res.status(200).json({
            status:"success",
            result:data
        })

    })
    .catch((err)=>{
        res.status(500).json({
            status:"fail",
            result:err
        })
    })
    // res.json({ok:'blog'})
})
router.post('/blog',(req,res)=>{
   const blogpost=req.body;
   const blog=new Blog({
    id:blogpost.id,
    topic:blogpost.topic,
    description:blogpost.description,
    posted_at:blogpost.posted_at,
    posted_by:blogpost.posted_by
   });
  blog.save().then((data)=>{
    res.status(200).json({
        status:"Success",
        result:data
    })
  })
.catch((err)=>{
    res.status(500).json({
        status:"Fail",
        result:err
    })
})

})
router.put('/blog/:blogid',(req,res)=>{
    const blogid=(req.params.blogid);
    const data=req.body;
    console.log(data)
    Blog.findByIdAndUpdate({
        _id:blogid
    }, data)
    .then((updatedpost)=>{
        // console.log(updatedpost)
        if(updatedpost){
            res.status(200).json({
                status:"Success",
                result:updatedpost
            })
        }else{
            res.status(404).json({
                status:"Fail",
                result:"404 not Found"
            })
        }
    }).catch(err=>{
        res.status(500).json({
            status:"Fail",
            result:err
        })
    })
})
router.delete('/blog/:id',(req,res)=>{
    console.log(req.params.id);
    Blog.deleteOne({id: req.params.id})
    .then(data=>{
        res.status(200).json({
            status:"Success",
            result:data
        })
    }).catch(err=>{
        res.status(500).json({
            status:"Fail",
            result:err
        })
    })
    
})
      
module.exports = router;
// console.log(req.params.id);
    // Blog.deleteOne({id: req.params.id}).then(response => {
    //     res.status(200).json({
    //         message: "Record deleted successfully",
    //         data: response
    //     });
    // }).catch(err => {
    //     res.status(500).json({
    //         message: "Failed to delete!",
    //         data: err
    //     });
    // });