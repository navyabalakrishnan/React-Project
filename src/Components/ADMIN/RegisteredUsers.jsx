import React, { useState } from 'react';
import '../../css/paginationstyle.css';
import {  useNavigate } from 'react-router-dom';

import Table from 'react-bootstrap/Table';
import Sidebar from '../../Layout/Sidebar';
const usersData = [
{"indexnumber":1,"first_name":"Cletus","email":"chindmoor0@flickr.com","Birthday":"25-06-2016","gender":"Male","residence":"213 Maple Wood Avenue","registration date":"16-11-2023"},
        {"indexnumber":2,"first_name":"Micheil","email":"mredfern1@sun.com","Birthday":"13-01-2013","gender":"Agender","residence":"4125 Comanche Terrace","registration date":"27-12-2023"},
        {"indexnumber":3,"first_name":"Drucie","email":"dkahan2@webs.com","Birthday":"23-07-2002","gender":"Female","residence":"20 Corben Hill","registration date":"09-07-2024"},
        {"indexnumber":4,"first_name":"Germain","email":"gpummell3@latimes.com","Birthday":"23-01-2001","gender":"Male","residence":"2700 Sundown Center","registration date":"15-05-2024"},
        {"indexnumber":5,"first_name":"Liz","email":"ldebrett4@sbwire.com","Birthday":"16-09-2020","gender":"Female","residence":"087 Fordem Crossing","registration date":"03-09-2023"},
        {"indexnumber":6,"first_name":"Brynne","email":"bmackiewicz5@chronoengine.com","Birthday":"17-07-2011","gender":"Female","residence":"33 Carey Parkway","registration date":"02-02-2024"},
        {"indexnumber":7,"first_name":"Anthiathia","email":"alinskey6@reverbnation.com","Birthday":"08-01-2012","gender":"Female","residence":"358 Westend Road","registration date":"15-12-2024"},
        {"indexnumber":8,"first_name":"Codee","email":"cdowty7@wikipedia.org","Birthday":"10-04-2006","gender":"Female","residence":"96 Dexter Pass","registration date":"18-01-2024"},
        {"indexnumber":9,"first_name":"Terza","email":"tstainburn8@berkeley.edu","Birthday":"13-01-2018","gender":"Female","residence":"024 Harper Parkway","registration date":"24-12-2023"},
        {"indexnumber":10,"first_name":"Minny","email":"mphripp9@archive.org","Birthday":"27-02-2002","gender":"Female","residence":"43516 Arizona Point","registration date":"05-09-2023"},
        {"indexnumber":11,"first_name":"Cyrillus","email":"choulstona@feedburner.com","Birthday":"30-10-2004","gender":"Male","residence":"2165 Pierstorff Parkway","registration date":"24-10-2024"},
        {"indexnumber":12,"first_name":"Hamil","email":"hanscombeb@infoseek.co.jp","Birthday":"19-06-2004","gender":"Male","residence":"447 Red Cloud Trail","registration date":"01-11-2023"},
        {"indexnumber":13,"first_name":"Early","email":"echadneyc@discuz.net","Birthday":"27-03-2014","gender":"Male","residence":"35215 Rutledge Circle","registration date":"24-05-2023"},
        {"indexnumber":14,"first_name":"Alverta","email":"aedmansd@weather.com","Birthday":"05-12-2014","gender":"Female","residence":"2661 Larry Court","registration date":"30-09-2024"},
        {"indexnumber":15,"first_name":"Marje","email":"mmapletofte@newsvine.com","Birthday":"27-05-2017","gender":"Female","residence":"02830 Ilene Street","registration date":"13-08-2024"},
        {"indexnumber":16,"first_name":"Irma","email":"idanielssonf@cbc.ca","Birthday":"23-10-2016","gender":"Female","residence":"3085 Delladonna Junction","registration date":"03-06-2023"},
        {"indexnumber":17,"first_name":"Grace","email":"ghutong@aboutads.info","Birthday":"13-04-2013","gender":"Male","residence":"80 Meadow Vale Park","registration date":"22-06-2024"},
        {"indexnumber":18,"first_name":"Sidonnie","email":"saxtensh@aol.com","Birthday":"17-01-2021","gender":"Female","residence":"47519 Novick Circle","registration date":"03-04-2024"},
        {"indexnumber":19,"first_name":"Barney","email":"briccioppoi@ifeng.com","Birthday":"21-01-2002","gender":"Agender","residence":"2001 Acker Crossing","registration date":"09-08-2024"},
        {"indexnumber":20,"first_name":"Sheena","email":"sseftonj@wiley.com","Birthday":"10-02-2004","gender":"Female","residence":"16 Johnson Lane","registration date":"08-05-2024"},
        {"indexnumber":21,"first_name":"Enrique","email":"ecudbirdk@chron.com","Birthday":"29-11-2017","gender":"Male","residence":"3016 Pankratz Avenue","registration date":"02-05-2024"},
        {"indexnumber":22,"first_name":"Wang","email":"wberthel@apple.com","Birthday":"23-01-2021","gender":"Male","residence":"32 Hauk Terrace","registration date":"14-08-2023"},
        {"indexnumber":23,"first_name":"Conant","email":"cvancem@skype.com","Birthday":"30-06-2011","gender":"Non-binary","residence":"598 Sheridan Crossing","registration date":"06-12-2023"},
        {"indexnumber":24,"first_name":"Ely","email":"ecancellierin@hp.com","Birthday":"27-10-2015","gender":"Male","residence":"54846 Mariners Cove Park","registration date":"12-09-2023"},
        {"indexnumber":25,"first_name":"Kimbra","email":"kcarmoo@jalbum.net","Birthday":"31-07-2015","gender":"Female","residence":"38400 Marcy Point","registration date":"03-05-2024"},
        {"indexnumber":26,"first_name":"Zebulen","email":"zbartelsp@engadget.com","Birthday":"16-07-2017","gender":"Male","residence":"67074 Marquette Trail","registration date":"23-02-2024"},
        {"indexnumber":27,"first_name":"Melli","email":"mdallicottq@tamu.edu","Birthday":"14-01-2007","gender":"Female","residence":"96440 Melvin Park","registration date":"07-12-2024"},
        {"indexnumber":28,"first_name":"Idell","email":"iismayr@businesswire.com","Birthday":"15-12-2014","gender":"Polygender","residence":"61 Carioca Parkway","registration date":"02-01-2023"},
        {"indexnumber":29,"first_name":"Sam","email":"smetterickes@kickstarter.com","Birthday":"05-10-2020","gender":"Male","residence":"99 Hallows Parkway","registration date":"29-07-2024"},
        {"indexnumber":30,"first_name":"Audrey","email":"alowerst@sina.com.cn","Birthday":"21-02-2003","gender":"Female","residence":"627 Butternut Circle","registration date":"25-06-2023"},
        {"indexnumber":31,"first_name":"Susette","email":"srizzottou@merriam-webster.com","Birthday":"14-08-2004","gender":"Female","residence":"35 Nancy Point","registration date":"06-12-2023"},
        {"indexnumber":32,"first_name":"Astrix","email":"aboughenv@amazon.co.jp","Birthday":"10-02-2011","gender":"Female","residence":"423 Chive Point","registration date":"27-08-2023"},
        {"indexnumber":33,"first_name":"Thedrick","email":"tcannellw@t.co","Birthday":"26-03-2008","gender":"Male","residence":"020 Dexter Road","registration date":"01-05-2024"},
        {"indexnumber":34,"first_name":"Hayyim","email":"hluckx@usgs.gov","Birthday":"20-11-2020","gender":"Male","residence":"23361 Mendota Drive","registration date":"27-01-2024"},
        {"indexnumber":35,"first_name":"Alfredo","email":"astrotoney@google.com.br","Birthday":"13-12-2004","gender":"Male","residence":"8525 Northwestern Lane","registration date":"25-07-2023"},
        {"indexnumber":36,"first_name":"Skipp","email":"salliotz@yahoo.com","Birthday":"13-12-2008","gender":"Male","residence":"435 Little Fleur Road","registration date":"29-12-2023"},
        {"indexnumber":37,"first_name":"Eduardo","email":"eluparto10@marketwatch.com","Birthday":"01-10-2019","gender":"Male","residence":"24296 Coolidge Drive","registration date":"16-04-2023"},
        {"indexnumber":38,"first_name":"Burton","email":"bgisbey11@google.com.br","Birthday":"29-05-2007","gender":"Male","residence":"8 Anthes Junction","registration date":"11-11-2023"},
        {"indexnumber":39,"first_name":"Bucky","email":"bgurry12@netlog.com","Birthday":"14-06-2019","gender":"Non-binary","residence":"511 Lakewood Way","registration date":"06-09-2024"},
        {"indexnumber":40,"first_name":"Duke","email":"djurn13@imdb.com","Birthday":"09-02-2004","gender":"Male","residence":"09054 Drewry Lane","registration date":"06-07-2024"},
        {"indexnumber":41,"first_name":"Darell","email":"daxcel14@ox.ac.uk","Birthday":"24-03-2021","gender":"Female","residence":"18914 Johnson Lane","registration date":"16-03-2024"},
        {"indexnumber":42,"first_name":"Wynny","email":"wfiveash15@google.com","Birthday":"27-09-2014","gender":"Female","residence":"4 Warner Trail","registration date":"06-12-2024"},
        {"indexnumber":43,"first_name":"Symon","email":"sjachimak16@comcast.net","Birthday":"06-04-2012","gender":"Male","residence":"03 Lyons Street","registration date":"12-10-2023"},
        {"indexnumber":44,"first_name":"Becka","email":"bpenburton17@home.pl","Birthday":"05-04-2010","gender":"Female","residence":"60 Twin Pines Plaza","registration date":"25-04-2024"},
        {"indexnumber":45,"first_name":"Randee","email":"rjakolevitch18@1688.com","Birthday":"07-05-2007","gender":"Female","residence":"7 Goodland Street","registration date":"08-06-2024"},
        {"indexnumber":46,"first_name":"Ophelie","email":"oandresser19@upenn.edu","Birthday":"14-01-2014","gender":"Female","residence":"88419 Straubel Lane","registration date":"23-01-2023"},
        {"indexnumber":47,"first_name":"Mayer","email":"mjedrzaszkiewicz1a@ehow.com","Birthday":"20-11-2014","gender":"Male","residence":"176 Mcbride Plaza","registration date":"17-07-2023"},
        {"indexnumber":48,"first_name":"Enrichetta","email":"emacartney1b@liveinternet.ru","Birthday":"08-09-2018","gender":"Female","residence":"098 Fieldstone Center","registration date":"20-05-2024"},
        {"indexnumber":49,"first_name":"Arda","email":"aiskowitz1c@sina.com.cn","Birthday":"10-11-2011","gender":"Bigender","residence":"590 Harbort Center","registration date":"27-11-2023"},
        {"indexnumber":50,"first_name":"Baxter","email":"blewton1d@indiegogo.com","Birthday":"17-11-2011","gender":"Male","residence":"9448 Eagle Crest Court","registration date":"15-03-2024"}]

const RegisteredUsers = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchEmail, setSearchEmail] = useState('');
    const navigate=useNavigate();
    const usersPerPage = 10;
    const filteredUsers = usersData.filter(user =>
      user.email.toLowerCase().includes(searchEmail.toLowerCase())
    );
  
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
    const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
   const nextPage = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };
   const prevPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  const handleLogout=()=>
    {
        localStorage.removeItem('adminPassword')
        navigate('/login')
    }
  
    return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar />
      
        <div
          style={{
            flex: 1,
            justifyContent:'center',alignContent:'center',
            marginLeft: '10px',
            padding: '20px',
          
          }}
        > 
        <div style={{display:'flex',justifyContent:'flex-end'
        }}><button
        onClick={handleLogout}
        style={{
          backgroundColor: '#fbc477',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          padding: '8px 16px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: 'bold',
        }}
      >
        Logout
      </button></div>
          <h2 style={{ textAlign: 'left' }}>Registered Users</h2>
          <div style={{ marginBottom: '20px', width: '30%' }}>
            <input
              type="text"
              placeholder="Search by email"
              value={searchEmail}
              onChange={(e) => setSearchEmail(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                fontSize: '16px',
                borderRadius: '4px',
                border: '1px solid #ddd',
              }}
            />
          </div>
  
          <Table
            style={{
              width: '100%',
              textAlign: 'center',
              backgroundColor: '#ffffff',
              border: '1px solid #ddd',
              borderRadius: '8px',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            }}
          >
            <thead style={{ backgroundColor: '#f0f0f0' }}>
              <tr>
                <th>No.</th>
                <th>Firstname</th>
                <th>Email</th>
                <th>Birthday</th>
                <th>Gender</th>
                <th>Residence</th>
                <th>Registration Date</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user, index) => (
                <tr key={index}>
                  <td>{user.indexnumber}</td>
                  <td>{user.first_name}</td>
                  <td>{user.email}</td>
                  <td>{user.Birthday}</td>
                  <td>{user.gender}</td>
                  <td>{user.residence}</td>
                  <td>{user['registration date']}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="pagination_rounded">
          <ul>
            <li>
              <a href="#" className="prev" onClick={prevPage}>
                <i className="fa fa-angle-left" aria-hidden="true"></i> Prev
              </a>
            </li>
            
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index + 1} className={currentPage === index + 1 ? 'active' : ''}>
                <a href="#" onClick={() => setCurrentPage(index + 1)}>
                  {index + 1}
                </a>
              </li>
            ))}
            <li>
              <a href="#" className="next" onClick={nextPage}>
                Next <i className="fa fa-angle-right" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
         
        </div>
      </div>
    );
  };
  
  export default RegisteredUsers;

        