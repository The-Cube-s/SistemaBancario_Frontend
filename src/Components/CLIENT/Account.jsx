import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Account.css'
import { useMyAccount } from '../../Shared/Hooks/Client/useMyAccount';
import { myAccountRequest } from '../../Services/apiClient';
import { convertData } from '../../Services/apiClient';
import toast from 'react-hot-toast';

export const Account = () => {

  const [account, setAccounts] = useState([])
  const [converter, setConverter] = useState({
    from: '',
    to: '',
    amountUser: ''
  })

  const convertAmount = async (convert) => {
    const res = await convertData(convert)

    console.log(res);
    if (res.error) return toast.error(res.error.response.data.message)
      console.log(res.data.convertedAmount);
      console.log(res.data.conversionRate);

    

    let responseConverter = `Cantidad convertida: ${res.data.convertedAmount}, Rate: ${res.data.conversionRate}`
    setConverter(res.data)

    return toast( responseConverter,
      {
        duration: 6000,
      }
    );
  }

  const getMyAccounts = async () => {
    const res = await myAccountRequest();

    if (res.error) return toast.error(res.error.response.data.message)
    //console.log(res.data);
    setAccounts(res.data)
    
  }

  useEffect(() => {
    getMyAccounts()
  }, [])
  

  const handleOnSubmit = (e) => {
    e.preventDefault()
    setConverter({from: '', to: '', amountUser: ''})
    convertAmount(converter)
  }

  return (
    <div className='container-div overflow-hidden'>
      <div className='form-control m-4 overflow-hidden'>
        <Form.Group className="m-3" controlId="formBasicEmail">
          <Form.Label className='label-balance'><strong>This is your balance:</strong></Form.Label>
          {
            account.map((index) => (
              <div key={index._id} className='div-balance'>Q.{index.balance}</div>
            ))
          }

        </Form.Group>
      </div>

      <form onSubmit={handleOnSubmit} className='form-control m-4 '>
        <div className='div-converter'>
          <Form.Group>
            <Form.Label><strong>Amount</strong></Form.Label>
            <br />
            <input className='input-group-text' min='0' step='any' type="number" placeholder="Enter Amount" value={converter.amountUser} onChange={e => setConverter({ ...converter, amountUser: e.target.value })} />
            <br />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label><strong>FROM</strong></Form.Label>
            <br />
           
            <select className='form-select' name="" id="" aria-label="Default select example" value={converter.from} onChange={e => setConverter({ ...converter, from: e.target.value })}>
            <option value="1">Select your Currency</option>
              <option value="GTQ">GTQ</option>
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
              <option value="JPY">JPY</option>
              <option value="MXN">MXN</option>
              <option value="CHF">CHF</option>
            </select>

          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label><strong>TO</strong></Form.Label>
            <br />

              <select className='form-select' name="" id="" value={converter.to} onChange={e => setConverter({ ...converter, to: e.target.value })} >
             <option value="1">Select your Currency</option>
             <option value="GTQ">GTQ</option>
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
              <option value="JPY">JPY</option>
              <option value="MXN">MXN</option>
              <option value="CHF">CHF</option>
            </select>
             
            <br />
            <button className='btn btn-dark' onSubmit={handleOnSubmit}>Converter </button>
          </Form.Group>

        </div>
      </form>

    </div>
  )
}
