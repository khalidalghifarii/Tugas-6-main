import type { HttpContext } from '@adonisjs/core/http'
import Destination from '#models/destination'

export default class DestinationsController {
  // Menampilkan daftar destinasi
  public async index({ view }: HttpContext) {
    const destinations = await Destination.all()
    return view.render('destinations/index', { destinations })
  }

  // Menampilkan form untuk menambah destinasi
  public async create({ view }: HttpContext) {
    return view.render('destinations/create')
  }

  // Menyimpan destinasi ke database
  public async store({ request, response, session }: HttpContext) {
    const name = request.input('name')
    const country = request.input('country')
    const description = request.input('description')
    const best_time_to_visit = request.input('best_time_to_visit')
    const estimated_budget = request.input('estimated_budget')

    // Validasi dasar
    if (!name || !country) {
      session.flash('error', 'Nama destinasi dan negara harus diisi!')
      return response.redirect().back()
    }

    // Simpan data
    await Destination.create({
      name,
      country,
      description,
      best_time_to_visit,
      estimated_budget
    })

    // Flash message
    session.flash('success', 'Destinasi wisata berhasil ditambahkan!')
    
    // Redirect ke halaman daftar
    return response.redirect('/destinations')
  }

  // Menampilkan detail destinasi
  public async show({ params, view, response }: HttpContext) {
    const destination = await Destination.find(params.id)
    
    if (!destination) {
      return response.status(404).send('Destinasi tidak ditemukan')
    }
    
    return view.render('destinations/show', { destination })
  }
}