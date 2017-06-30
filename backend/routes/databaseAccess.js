import express from 'express';
import Todoitem from '../models/TodoItem'
const router = express.Router();

router.post ('/add', (req, res) => {
  const testTodo = new TodoItem({
    task: "test task"
  });

  testTodo.save()
    .then(response => {
      res.send(response);
    })
    .catch(error => {
      res.send(error);
    })
  });
});

export default router;
