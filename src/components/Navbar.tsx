import logo from '/images/logo.png'

const Navbar = () => {
    return (
        <div id="navbar" className=" w-full flex flex-wrap justify-around items-center p-3">
            <div className=" overflow-hidden">
                <img className="w-60 object-contain " src={logo} alt="" />
            </div>
            <div className="sm:hidden text-xl font-bold text-center">
                Ricevi un preventivo personalizzato
                in meno di un minuto
            </div>
            <div className="hidden sm:block text-xl font-bold text-center">
                Ricevi un preventivo personalizzato <br />
                in meno di un minuto
            </div>
        </div>
    )
}

export default Navbar
