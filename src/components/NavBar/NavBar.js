import React from 'react'

const NavBar = () => {
  return (
    <div className="navbar bg-base-100"><font></font>
    <div className="flex-1"><font></font>
        <a className="btn btn-ghost normal-case text-xl ">StockDrinks</a><font></font>
    </div><font></font>
    <div className="flex-none"><font></font>
        <div className="dropdown dropdown-end"><font></font>
        <label tabIndex={0} className="btn btn-ghost btn-circle"><font></font>
            <div className="indicator"><font></font>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg><font></font>
            <span className="badge badge-sm indicator-item">6</span><font></font>
            </div><font></font>
        </label><font></font>
        
        <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"><font></font>
            <div className="card-body"><font></font>
            <span className="font-bold text-lg">8 Items</span><font></font>
            <span className="text-info">Subtotal: $999</span><font></font>
            <div className="card-actions"><font></font>
                <button className="btn btn-primary btn-block">View cart</button><font></font>
            </div><font></font>
            </div><font></font>
        </div><font></font>
        </div><font></font>
        <div className="dropdown dropdown-end"><font></font>
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar"><font></font>
            <div className="w-10 rounded-full"><font></font>
            <img src="https://placeimg.com/80/80/people" /><font></font>
            </div><font></font>
        </label><font></font>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"><font></font>
            <li><font></font>
            <a className="justify-between"><font></font>
                Profile<font></font>
                <span className="badge">New</span><font></font>
            </a><font></font>
            </li><font></font>
            <li><a>Settings</a></li><font></font>
            <li><a>Logout</a></li><font></font>
        </ul><font></font>
        </div><font></font>
    </div><font></font>
    </div>
  )
}

export default NavBar