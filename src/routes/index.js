import { Router } from 'express';
import appointmentsRouter from './appointments.routes.js';
import doctorsRouter from './doctors.routes.js';
import patientsRouter from './patients.routes.js'

const router = Router();

router.use(appointmentsRouter);
router.use(doctorsRouter);
router.use(patientsRouter);

export default router;
