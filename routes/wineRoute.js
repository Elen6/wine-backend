import  express  from 'express';
import { getWines, postWine, getOneWine, updateWine, deleteWine } from '../controllers/wineController.js';



const router = express.Router();
router.get('/', getWines);
router.put('/:id', updateWine );
router.get('/:id', getOneWine );

router.post('/',postWine);
router.delete('/:id',deleteWine);


export default router;