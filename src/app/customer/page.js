import React from 'react'

const PageCustomer = () => {
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            <header className="bg-white shadow p-4 flex justify-between items-center">
                <h1 className="text-xl font-semibold">Selamat Datang, Customer</h1>
                <div className="flex items-center space-x-4">
                    <button className="text-gray-600 hover:text-gray-900">🛒</button>
                    <div className="flex items-center space-x-2 cursor-pointer">
                        <img src="https://i.pravatar.cc/32" alt="Avatar" className="rounded-full" />
                        <span className="font-medium">Customer</span>
                    </div>
                </div>
            </header>

            <main className="flex-1 p-6 max-w-5xl mx-auto w-full">
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">Produk Favorit</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-white rounded shadow p-4 flex flex-col items-center">
                            <img src="https://via.placeholder.com/100" alt="Produk 1" className="mb-2" />
                            <h3 className="font-semibold">Produk A</h3>
                            <p className="text-green-600 font-bold">Rp 50.000</p>
                            <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Beli</button>
                        </div>
                        <div className="bg-white rounded shadow p-4 flex flex-col items-center">
                            <img src="https://via.placeholder.com/100" alt="Produk 2" className="mb-2" />
                            <h3 className="font-semibold">Produk B</h3>
                            <p className="text-green-600 font-bold">Rp 75.000</p>
                            <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Beli</button>
                        </div>
                        <div className="bg-white rounded shadow p-4 flex flex-col items-center">
                            <img src="https://via.placeholder.com/100" alt="Produk 3" className="mb-2" />
                            <h3 className="font-semibold">Produk C</h3>
                            <p className="text-green-600 font-bold">Rp 100.000</p>
                            <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Beli</button>
                        </div>
                        <div className="bg-white rounded shadow p-4 flex flex-col items-center">
                            <img src="https://via.placeholder.com/100" alt="Produk 4" className="mb-2" />
                            <h3 className="font-semibold">Produk D</h3>
                            <p className="text-green-600 font-bold">Rp 120.000</p>
                            <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Beli</button>
                        </div>
                    </div>
                </section>

                <section>
                <h2 className="text-2xl font-semibold mb-4">Riwayat Transaksi</h2>
                <div className="bg-white rounded shadow p-4">
                    <ul className="divide-y">
                        <li className="py-3 flex justify-between">
                            <div>
                                <p className="font-semibold">#TRX00123</p>
                                <p className="text-sm text-gray-600">2024-05-30</p>
                            </div>
                            <div className="text-green-600 font-bold">Rp 150.000</div>
                        </li>
                        <li className="py-3 flex justify-between">
                            <div>
                                <p className="font-semibold">#TRX00124</p>
                                <p className="text-sm text-gray-600">2024-05-28</p>
                            </div>
                            <div className="text-green-600 font-bold">Rp 200.000</div>
                        </li>
                        <li className="py-3 flex justify-between">
                            <div>
                                <p className="font-semibold">#TRX00125</p>
                                <p className="text-sm text-gray-600">2024-05-25</p>
                            </div>
                            <div className="text-green-600 font-bold">Rp 75.000</div>
                        </li>
                    </ul>
                </div>
                </section>
            </main>
            <footer className="bg-white shadow p-4 text-center text-gray-600">
                &copy; 2024 Point of Sale App
            </footer>
        </div>
    )
}

export default PageCustomer
