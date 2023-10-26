
import schema from './user.model.js'
export function addTask(req,res){
    const {task}=req.body;
    schema.create({task})
    console.log(task);
   res.end();
}
export async function getTask(req,res){
            let task=await schema.find()
            res.status(200).send(task)
}
export function delTask(req,res){
    const {id}=req.params;
    console.log(id);
    const data=schema.deleteOne({_id:id})
    data.then((resp)=>{
        res.status(200).send(resp)
    }).catch((error)=>{
        res.status(404).send(error)
    })
}
export function editTask(req,res){
    const {id}=req.params;
    console.log(id);
    res.end();
}