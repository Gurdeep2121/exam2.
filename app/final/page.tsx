export default function Page() {
  return (
    <>
  
    <h1 className="m-8 text-red-600 text-4xl font-bold underline text-center">Knicks Fans Ticket Holiday Giveaway Form: Final Exam</h1>
    <h2 className="mx-10 my-4 font-bold text-green-700 text-2xl pb-2">The best New York Knicks fan page is giving 4 holiday Knicks front row tickets to one lucky winner! Please fill out the form below to enter for a chance to win.</h2>
    <h3 className="mx-5 my-2 font-bold underline text-orange-600 text-2xl">Contact Information:</h3>
    <form>
      <label htmlFor="product" className="mx-5 my-2 font-bold text-blue-800">First Name: *</label>
      <input type="text" name="product" id="product" className="m-5 text-black bg-gray-200"/>
      <br />
      <label htmlFor="product" className="mx-5 my-2 font-bold text-blue-800">Middle Name:</label>
      <input type="text" name="product" id="product" className="m-5 text-black bg-gray-200"/>
      <br />
      <label htmlFor="product" className="mx-5 my-2 font-bold text-blue-800">Last Name: *</label>
      <input type="text" name="product" id="product" className="m-5 text-black bg-gray-200"/>
      <br />
      <label htmlFor="product" className="mx-5 my-2 font-bold text-blue-800">Phone #: *</label>
      <input type="text" name="product" id="product" className="m-5 text-black bg-gray-200"/>
      <br />
      <label htmlFor="product" className="mx-5 my-2 font-bold text-blue-800">Email: *</label>
      <input type="text" name="product" id="product" className="m-5 text-black bg-gray-200"/>
      <br />

      <label htmlFor="game" className="mx-5 my-2 font-bold underline text-orange-600 text-2xl">Choose a game:</label>
      <select name="game" id="game">
      
      <option value="Christmas">Christmas Day Game vs Spurs</option>
      <option value="New Year">New Year Day Game vs Jazz</option>
      </select>

      <br />
      <h4 className="mx-5 my-1 font-bold text-blue-800">Question 1: Who is the only Knick to have ever won a regular season MVP? </h4> 
      <div className="ml-5 mt-5">
      <input type="radio" id="Wilis Reed" name="fav_language" value="Willis Reed" />
      <label htmlFor="Willis Reed"> Willis Reed</label><br />
      <input type="radio" id="css" name="fav_language" value="CSS" />
      <label htmlFor="css"> Patrick Ewing</label><br />
      <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
      <label htmlFor="javascript"> Walt Frazier</label><br />
      <input type="radio" id="css" name="fav_language" value="CSS" />
      <label htmlFor="css"> Carmelo Anthony</label>
      </div>
    
      <br />
      <h4 className="mx-5 my-1 font-bold text-blue-800">Question 2: Which current Knick has won the NBA three point competition?  </h4> 
      <div className="ml-5 mt-5">
      <input type="radio" id="Wilis Reed" name="fav_language" value="Willis Reed" />
      <label htmlFor="Willis Reed"> Jalen Brunson</label><br />
      <input type="radio" id="css" name="fav_language" value="CSS" />
      <label htmlFor="css"> OG Anunoby</label><br />
      <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
      <label htmlFor="javascript"> Mikal Bridges</label><br />
      <input type="radio" id="css" name="fav_language" value="CSS" />
      <label htmlFor="css"> Karl-Anthony Towns</label>
      </div>
      <br />

      <h4 className="mx-5 my-1 font-bold text-blue-800">Question 3: When referencing DFG% as the metric to assess defensive performance, which current Knicks player is statistically the best defensive player for the 2024-25 season? </h4> 
      <div className="ml-5 mt-5">
      <input type="radio" id="html" name="fav_language" value="html" />
      <label htmlFor="Willis Reed"> Karl Anthony-Towns</label><br />
      <input type="radio" id="css" name="fav_language" value="CSS" />
      <label htmlFor="css"> OG Anunoby</label><br />
      <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
      <label htmlFor="javascript"> Jericho Sims</label><br />
      <input type="radio" id="css" name="fav_language" value="CSS" />
      <label htmlFor="css"> Josh Hart</label>
      </div>
      <br />
      <h4 className="mx-5 my-1 font-bold text-blue-800">Question 4: Select ALL the players that won the NBA slam dunk contest while playing for the New York Knicks: </h4> 
      <div className="ml-5 mt-5">
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
      <label htmlFor="vehicle1"> James White</label><br />
      <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
      <label htmlFor="vehicle2"> Kenny Walker</label><br />
      <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
      <label htmlFor="vehicle2"> Nate Robinson</label><br />
      <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
      <label htmlFor="vehicle2"> Obi Toppin</label><br />
      <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
      <label htmlFor="vehicle2"> Jericho Sims</label><br />
      </div>
      <br />

      <h4 className="mx-5 my-1 font-bold text-blue-800">Question 5: Select ALL the players in the Knicks starting lineup that were on the roster during the 2023-24 season: </h4> 
      <div className="ml-5 mt-5">
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
      <label htmlFor="vehicle1"> Jalen Brunson</label><br />
      <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
      <label htmlFor="vehicle2"> Mikal Bridges</label><br />
      <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
      <label htmlFor="vehicle2"> Josh Hart</label><br />
      <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
      <label htmlFor="vehicle2"> OG Anunoby</label><br />
      <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
      <label htmlFor="vehicle2"> Karl-Anthony Towns</label><br />
      </div>
      <br />

      <button className="ml-10 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" type="submit">Submit Form</button>
    </form>
    </>
  );
}
