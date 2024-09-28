import './Home_loan.css'
const Home_loan=()=>{

    const offers = [
        { id: 1, logo: 'https://th.bing.com/th?id=OIP.g4-QIYLBFiQxsn72n4BPUwHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2', name: 'Bank A', description: '50% Off on Shoes', offer: 'Get 50% off on all shoes this summer!' },
        { id: 2, logo: 'https://th.bing.com/th?id=OIP.g4-QIYLBFiQxsn72n4BPUwHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2', name: 'Bank B', description: 'Buy 1 Get 1 Free', offer: 'Buy one get one free on all shirts.' },
        { id: 3, logo: 'https://th.bing.com/th?id=OIP.g4-QIYLBFiQxsn72n4BPUwHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2', name: 'Bank C', description: '20% Off on Electronics', offer: 'Save 20% on all electronic items.' },
        { id: 4, logo: 'https://th.bing.com/th?id=OIP.g4-QIYLBFiQxsn72n4BPUwHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2', name: 'Bank D', description: '30% Off on Groceries', offer: 'Save 30% on your grocery shopping.' },
        { id: 5, logo: 'https://th.bing.com/th?id=OIP.g4-QIYLBFiQxsn72n4BPUwHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2', name: 'Bank E', description: '15% Off on Furniture', offer: 'Get 15% off on all furniture items.' },
        { id: 6, logo: 'https://th.bing.com/th?id=OIP.g4-QIYLBFiQxsn72n4BPUwHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2', name: 'Bank F', description: '10% Cashback', offer: 'Get 10% cashback on your first purchase.' },
      ];
      
    return(
        <>
        <div className="main">
            <div className='head'>
                <div className='image'>

                </div>
            </div>
            <div className="contact-guide">
             <div className="content-box">
                <h1>YOUR GUIDE TO </h1>
                <h2>HOME OWNERSHIP</h2>
                <p>
                At Homesfy Realty Ltd., we understand that buying a home is one of the most significant decisions you'll ever make. That's why we're dedicated to providing you with the resources and support you need to navigate the home loan process confidently. Our comprehensive Home Loan Service is designed to be your one-stop shop for home financing, empowering you to make informed decisions and secure the perfect loan for your dream home.
                </p>
             </div>
             <div className="form-container">
                   <form>
                   <input type="text" placeholder="Input 1" />
                   <input type="text" placeholder="Input 2" />
                   <input type="text" placeholder="Input 3" />
                   <input type="text" placeholder="Input 4" />
                   <button type="submit">Submit</button>
                   </form>
             </div>
            </div>
            <div className='definition'>
                <h1>What is a Home Loan?</h1>
                <p>A home loan is a secured loan provided by banks and financial institutions to help you purchase a residential property. This can include ready-to-move-in houses, apartments, or even plots of land for construction. Home loans offer a flexible way to finance your dream home, spreading the cost over a manageable period through monthly installments.</p>
            </div>
            <div className='offers'>
                <h1>Top Home Loans</h1>
                <h1>Schemes & Offers</h1>
                <div className="offers-container">
                    {offers.map((offer) => (
                 <div key={offer.id} className="offer-card">
                    <img src={offer.logo} alt={`${offer.name} logo`} className="bank-logo" />
                   <div className="offer-details">
                 <h3>{offer.name}</h3>
            <p className="description">{offer.description}</p>
            <p className="offer">{offer.offer}</p>
          </div>
        </div>
      ))}
    </div>
                </div>
            </div>
        </>
    )
}
export default Home_loan;