import React from 'react'
import { Navbar } from '../Navbar'
import { Homepage } from '../home/Homepage'
import { Loginpage } from '../login/Loginpage'
import { Registerpage } from '../register/Registerpage'
import { Contactpage } from '../contact/Contactpage'
import { Grafpage } from '../graficas/Grafpage'
import { Route, Routes } from 'react-router-dom'
import { PrivateRoute } from './PrivateRoute';
import { Slideshow } from '../slideshow/slideshow';


export const AppRouter = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path='/' element= {<Homepage/>} />
            <Route path='login' element= {<Loginpage/>} />
            <Route path='register' element= {<Registerpage/>} />
            <Route
						path='/'
						element={
							<PrivateRoute>
								<Homepage />
							</PrivateRoute>
						}
					/>
          <Route
						path='contact'
						element={

								<Contactpage />

						}
					/>
          <Route
						path='graficas'
						element={

								<Grafpage />

						}
					/>
			<Route path='slideshow' element= {<Slideshow/>} />
        </Routes>
    </>
  );
};

