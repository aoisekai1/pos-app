"use client"
import Head from "next/head";
import { useRouter } from "next/navigation";
import { GrTransaction } from "react-icons/gr";
import { MdInventory } from "react-icons/md";
import { TbReport } from "react-icons/tb";

export default function Home() {
	const router = useRouter()
	const handleLogin = () => {
		router.push('/login')
	}
	const handlerSignup = () => {
		router.push('/signup')
	}
	return (
		<>
			<Head>
				<title>POSPro - Aplikasi Point of Sale Terbaik</title>
				<meta name="description" content="POSPro, solusi Point of Sale modern untuk bisnis Anda." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>

			<header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
				<nav className="container mx-auto flex justify-between items-center py-6 px-4">
					<h1 className="text-2xl font-bold">POSPro</h1>
					<ul className="flex space-x-6">
						<li className="flex items-center"><a href="#features" className="hover:underline">Fitur</a></li>
						<li className="flex items-center"><a href="#pricing" className="hover:underline">Harga</a></li>
						<li className="flex items-center"><a href="#contact" className="hover:underline">Kontak</a></li>
						<li className="space-x-4">
							<button onClick={handleLogin} className="bg-blue-400 text-white font-semibold px-4 py-2 rounded hover:bg-gray-100 hover:text-black cursor-pointer">Login</button>
							<button onClick={handlerSignup} className="bg-white text-blue-700 font-semibold px-4 py-2 rounded hover:bg-gray-100 cursor-pointer">Coba Gratis</button>
						</li>
					</ul>
				</nav>
			</header>

			<main>
				{/* Hero Section */}
				<section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-4">
					<div className="container mx-auto flex flex-col md:flex-row items-center">
						<div className="md:w-1/2 mb-10 md:mb-0">
							<h2 className="text-4xl font-extrabold mb-4">Solusi Point of Sale Modern untuk Bisnis Anda</h2>
							<p className="mb-6 text-lg">POSPro memudahkan pengelolaan penjualan, inventaris, dan laporan bisnis secara real-time dengan antarmuka yang mudah digunakan.</p>
							<button onClick={handlerSignup} className="bg-white text-blue-700 font-bold px-6 py-3 cursor-pointer rounded shadow hover:bg-gray-100 transition">Mulai Coba Gratis</button>
						</div>
						<div className="md:w-1/2">
							<img src="/assets/images/pos_cover.png" alt="POS Application" className="rounded-lg shadow-lg" />
						</div>
					</div>
				</section>

				{/* Features Section */}
				<section id="features" className="py-20 bg-gray-50 px-4">
				<div className="container mx-auto text-center max-w-4xl">
					<h3 className="text-3xl font-bold mb-12">Fitur Unggulan POSPro</h3>
					<div className="grid md:grid-cols-3 gap-10">
						<div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
							{/* <img src="/icons/fast.svg" alt="Cepat" className="mx-auto mb-4 h-16" /> */}
							<div className="w-full flex justify-center">
								<GrTransaction className="w-16 h-16" />
							</div>
							<h4 className="font-semibold text-xl mb-2">Transaksi Cepat</h4>
							<p>Proses pembayaran dan checkout dengan cepat tanpa antrean panjang.</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
							{/* <img src="/icons/inventory.svg" alt="Inventaris" className="mx-auto mb-4 h-16" /> */}
							<div className="w-full flex justify-center">
								<MdInventory className="w-16 h-16" />
							</div>
							<h4 className="font-semibold text-xl mb-2">Manajemen Inventaris</h4>
							<p>Pantau stok barang secara real-time dan dapatkan notifikasi saat stok menipis.</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
							{/* <img src="/icons/report.svg" alt="Laporan" className="mx-auto mb-4 h-16" /> */}
							<div className="w-full flex justify-center">
								<TbReport className="w-16 h-16" />
							</div>
							<h4 className="font-semibold text-xl mb-2">Laporan Lengkap</h4>
							<p>Dapatkan laporan penjualan dan performa bisnis secara detail dan mudah dipahami.</p>
						</div>
					</div>
				</div>
				</section>

				{/* Pricing Section */}
				<section id="pricing" className="py-20 px-4">
					<div className="container mx-auto text-center max-w-4xl">
						<h3 className="text-3xl font-bold mb-12">Pilih Paket yang Sesuai</h3>
						<div className="grid md:grid-cols-3 gap-8">
						<div className="border rounded-lg p-8 shadow hover:shadow-lg transition">
							<h4 className="text-xl font-semibold mb-4">Gratis</h4>
							<p className="text-4xl font-bold mb-6">Rp0<span className="text-base font-normal">/bulan</span></p>
							<ul className="mb-6 text-left space-y-2">
								<li>✔️ Transaksi dasar</li>
								<li>✔️ Manajemen produk</li>
								<li>❌ Laporan lengkap</li>
								<li>❌ Support 24/7</li>
							</ul>
							<button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition w-full">Daftar Gratis</button>
						</div>
						<div className="border-2 border-blue-600 rounded-lg p-8 shadow-lg">
							<h4 className="text-xl font-semibold mb-4">Pro</h4>
							<p className="text-4xl font-bold mb-6">Rp150.000<span className="text-base font-normal">/bulan</span></p>
							<ul className="mb-6 text-left space-y-2">
								<li>✔️ Semua fitur Gratis</li>
								<li>✔️ Laporan lengkap & analitik</li>
								<li>✔️ Support 24/7</li>
								<li>✔️ Multi-user & cabang</li>
							</ul>
							<button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition w-full">Mulai Pro</button>
						</div>
						<div className="border rounded-lg p-8 shadow hover:shadow-lg transition">
							<h4 className="text-xl font-semibold mb-4">Enterprise</h4>
							<p className="text-4xl font-bold mb-6">Hubungi Kami</p>
							<ul className="mb-6 text-left space-y-2">
								<li>✔️ Kustomisasi penuh</li>
								<li>✔️ Integrasi API</li>
								<li>✔️ Dedicated support</li>
								<li>✔️ Pelatihan & konsultasi</li>
							</ul>
							<button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition w-full">Hubungi Sales</button>
						</div>
						</div>
					</div>
				</section>

				{/* Contact Section */}
				<section id="contact" className="bg-gray-100 py-20 px-4">
					<div className="container mx-auto max-w-2xl text-center">
						<h3 className="text-3xl font-bold mb-6">Hubungi Kami</h3>
						<p className="mb-8">Punya pertanyaan? Tim kami siap membantu Anda.</p>
						<form className="space-y-6 text-left">
						<div>
							<label htmlFor="name" className="block mb-2 font-semibold">Nama</label>
							<input type="text" id="name" className="w-full p-3 border rounded" placeholder="Nama Anda" />
						</div>
						<div>
							<label htmlFor="email" className="block mb-2 font-semibold">Email</label>
							<input type="email" id="email" className="w-full p-3 border rounded" placeholder="email@domain.com" />
						</div>
						<div>
							<label htmlFor="message" className="block mb-2 font-semibold">Pesan</label>
							<textarea id="message" rows="4" className="w-full p-3 border rounded" placeholder="Tulis pesan Anda..."></textarea>
						</div>
						<button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition w-full">Kirim Pesan</button>
						</form>
					</div>
				</section>
			</main>

			<footer className="bg-gray-800 text-gray-400 py-8 text-center">
				<p>© 2024 POSPro. Semua hak cipta dilindungi.</p>
			</footer>
		</>
	);
}
