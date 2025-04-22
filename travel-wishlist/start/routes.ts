/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const DestinationsController = () => import('#controllers/destinations_controller')

// Redirect root ke destinations
router.get('/', async ({ response }) => {
  return response.redirect('/destinations')
})

// Routes untuk destinations
router.get('/destinations', [DestinationsController, 'index'])
router.get('/destinations/create', [DestinationsController, 'create'])
router.post('/destinations', [DestinationsController, 'store'])
router.get('/destinations/:id', [DestinationsController, 'show'])