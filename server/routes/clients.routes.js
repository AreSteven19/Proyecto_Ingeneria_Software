import { Router } from 'express';

import {
    getClients,
    getClient,
    getBarber,
    createClient,
    updateClient,
    deleteClient
} from '../routes/controllers/clients.controllers.js'
import {
    getServices,
    getService,
    createService,
    updateService,
    deleteService
} from '../routes/controllers/services.controllers.js'


const router = Router();

router.get('/clients', getClients);
router.post('/clients/:email/:password', getClient);//se cambio a post
router.get('/barbers/', getBarber);
router.post('/clients', createClient);
router.put('/clients/:id', updateClient);
router.delete('/clients/:id', deleteClient);

router.get('/services', getServices);
router.get('/services/:id', getService);
router.post('/services', createService);
router.put('/services/:id', updateService);
router.delete('/services/:id', deleteService);

export	default router


