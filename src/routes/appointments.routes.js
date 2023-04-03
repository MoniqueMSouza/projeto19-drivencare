import { Router } from 'express';


const router = Router();

router.post('/schedule', () =>{});
router.get('/sheduled/:idPatient', () =>{});
router.get('/historic/:idPatient', () =>{});
router.get('/sheduled/:idDoctor', () =>{});
router.put('/reply/:idDoctor', () =>{});
router.get('/historic/:idDoctor', () =>{});

export default router;