import { useState } from 'react'
import { 
    Container, Title, Form,
    Label, Input, Button,
    Message
} from './StyledTransfer'
import { useAddTransfer } from '../../Shared/Hooks/Client/useAddTransfer'
import { useUserDetails } from '../../Shared/Hooks/useUserDetails'



export const TranseferClient = () => {

    const { loading, addTransfer } = useAddTransfer()
    const { uid } = useUserDetails()
    const [ transfer, setTransfer ] = useState({
        date: '',
        amount: '',
        noaccount: '',
        user: ''
    })

    if(loading) return console.log('ta cargando ');

    const handleOnSubmit = (e) =>{
        e.preventDefault()
        transfer.user = uid
        console.log(transfer.user);
        addTransfer(transfer)
    }

  return (

    <Container>
            <Title>Transferencia bancaria </Title>
            <Form className='form-control' onSubmit={handleOnSubmit}>
                
                <div className='form-group'>
                    <br />  
                    <Label>DATE: </Label>
                    <br />
                    <input type="date"
                        value={transfer.date}
                        onChange={e => setTransfer({...transfer, date: e.target.value})} />
                </div>
                <br />
                <div className='form-group'>
                    <Label>AMOUNT:</Label>
                    <br />
                    <Input
                        type="number"
                        name="amount"
                        value={transfer.amount}
                        onChange={e => setTransfer({...transfer, amount: e.target.value})}
                        required
                    />
                </div>
                <div className='form-group'>
                    <Label>NO. ACCOUNT:</Label>
                    <br />
                    <Input
                        type="text"
                        name="noaccount"
                        value={transfer.noaccount}
                        onChange={e => setTransfer({...transfer, noaccount: e.target.value})}
                        required
                    />
                </div>
                <div className='form-group'>
                    <Label>USER</Label>
                    <br />
                    <Input
                        type="text"
                        placeholder='Id Usuario'
                        name="user"
                        value={transfer.user}
                        onChange={e => setTransfer({...transfer, user: e.target.value})}
                        disabled
                    />
                </div>
                
                <Button type="submit" disabled={loading}> Transferir </Button>
                
            </Form>
        </Container>

  )
}
