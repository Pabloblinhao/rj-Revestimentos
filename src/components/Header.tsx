function Header(){
    return(
        <header className="mb-50">
            <div className="flex justify-between items-center">
                <h1 className="text-6xl font-inter tracking-wide ml-[300px] text-gray-700">RJ</h1>
                <nav>
                    <ul className="flex text-3xl -ml-[500px] border-b pb-2">
                    <div className="ml-20 flex gap-6 text-gray-500">
                    <li><a href="#">Início</a></li>
                    <li><a href="#services">Serviços</a></li>
                    <li><a href="#">Contato</a></li>
                    </div>
                    </ul>
                    </nav>
                </div>
        </header>
    )
}

export default Header