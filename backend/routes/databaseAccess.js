import express from 'express';
import TodoItem from '../models/TodoItem'
const router = express.Router();

router.post ('/add', (req, res) => {
  console.log(req.body)
  const testTodo = new TodoItem({
    taskText: req.body.task,
    completed: req.body.completed
  });

  testTodo.save()
    .then(response => {
      res.send(response);
    })
    .catch(error => {
      res.send(error);
    })
});

export default router;
