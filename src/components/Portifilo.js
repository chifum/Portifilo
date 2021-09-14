import React from 'react'

const Portifilo = () => {
    return (
        <div className="portifilo-container" id="portfolio">
            <div className="container">
            <h1 className="portifilo-h1">Portifilo</h1>
                <div className="row  portifilo">
                    <a className="portifilo-link firstpage portifilo-box portifilo-img" 
                     href="https://taberancleoffaith.com/" style={{textDecoration:'none', color:'#262626'}} target="_blank" rel="noopener noreferrer">Taberancleoffaith</a>
                    <a className="portifilo-link secondpage portifilo-box portifilo-img2" 
                    href="https://travelmandiary.com/" style={{textDecoration:'none', color:'#262626'}} target="_blank" rel="noopener noreferrer">Travelmandiary</a>
                </div>
            </div>
        </div>
    )
}

export default Portifilo
