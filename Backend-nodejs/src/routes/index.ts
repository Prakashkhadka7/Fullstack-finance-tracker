import { Router } from 'express'



const router = Router()

router.use('/classes', classRoutes)


export default router