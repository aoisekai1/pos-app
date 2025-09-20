import React from 'react'
import PropTypes from 'prop-types'

const PageAdmin = () => {
	return (
		<>
			<div className="bg-gray-100 min-h-screen flex">
				<aside className="w-64 bg-white shadow-md flex flex-col">
					<div className="p-6 text-2xl font-bold border-b">POS Admin</div>
					<nav className="flex-1 p-4 space-y-2">
						<a href="#" className="block px-4 py-2 rounded bg-blue-500 text-white font-semibold">Dashboard</a>
						<a href="#" className="block px-4 py-2 rounded hover:bg-blue-100">Produk</a>
						<a href="#" className="block px-4 py-2 rounded hover:bg-blue-100">Transaksi</a>
						<a href="#" className="block px-4 py-2 rounded hover:bg-blue-100">Laporan</a>
						<a href="#" className="block px-4 py-2 rounded hover:bg-blue-100">Pengguna</a>
						<a href="#" className="block px-4 py-2 rounded hover:bg-blue-100">Pengaturan</a>
					</nav>
				</aside>

				<div className="flex-1 flex flex-col">
					<header className="bg-white shadow p-4 flex justify-between items-center">
						<h1 className="text-xl font-semibold">Dashboard Admin</h1>
						<div className="flex items-center space-x-4">
							<button className="text-gray-600 hover:text-gray-900">🔔</button>
							<div className="flex items-center space-x-2 cursor-pointer">
								<img src="https://i.pravatar.cc/32" alt="Avatar" className="rounded-full" />
								<span className="font-medium">Admin</span>
							</div>
						</div>
					</header>
					<main className="p-6 overflow-auto">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
							<div className="bg-white p-4 rounded shadow">
								<h2 className="text-lg font-semibold mb-2">Total Penjualan Hari Ini</h2>
								<p className="text-3xl font-bold text-green-600">Rp 12.500.000</p>
							</div>
							<div className="bg-white p-4 rounded shadow">
								<h2 className="text-lg font-semibold mb-2">Produk Terjual</h2>
								<p className="text-3xl font-bold text-blue-600">150</p>
							</div>
							<div className="bg-white p-4 rounded shadow">
								<h2 className="text-lg font-semibold mb-2">Transaksi Baru</h2>
								<p className="text-3xl font-bold text-purple-600">25</p>
							</div>
						</div>

						<section className="bg-white p-4 rounded shadow">
							<h2 className="text-xl font-semibold mb-4">Transaksi Terakhir</h2>
							<table className="w-full text-left border-collapse">
								<thead>
									<tr className="border-b">
										<th className="py-2 px-4">ID</th>
										<th className="py-2 px-4">Pelanggan</th>
										<th className="py-2 px-4">Total</th>
										<th className="py-2 px-4">Status</th>
										<th className="py-2 px-4">Tanggal</th>
									</tr>
								</thead>
								<tbody>
									<tr className="border-b hover:bg-gray-50">
										<td className="py-2 px-4">#00123</td>
										<td className="py-2 px-4">Budi</td>
										<td className="py-2 px-4">Rp 150.000</td>
										<td className="py-2 px-4 text-green-600 font-semibold">Selesai</td>
										<td className="py-2 px-4">2024-06-01</td>
									</tr>
									<tr className="border-b hover:bg-gray-50">
										<td className="py-2 px-4">#00124</td>
										<td className="py-2 px-4">Sari</td>
										<td className="py-2 px-4">Rp 200.000</td>
										<td className="py-2 px-4 text-yellow-600 font-semibold">Proses</td>
										<td className="py-2 px-4">2024-06-01</td>
									</tr>
									<tr className="border-b hover:bg-gray-50">
										<td className="py-2 px-4">#00125</td>
										<td className="py-2 px-4">Andi</td>
										<td className="py-2 px-4">Rp 75.000</td>
										<td className="py-2 px-4 text-red-600 font-semibold">Batal</td>
										<td className="py-2 px-4">2024-06-01</td>
									</tr>
								</tbody>
							</table>
						</section>
					</main>
				</div>
			</div>

		</>
	)
}

export default PageAdmin
