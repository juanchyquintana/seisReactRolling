import { Button, ListGroupItem } from 'react-bootstrap'

const ItemColor = ({color, eliminarColor}) => {
  return (
    <ListGroupItem className='d-flex justify-content-between'>
        <div style={{
            backgroundColor: color
        }} className='w-25 border border-black '>
        </div>
        {color}
        
        <Button variant="danger" onClick={() => {eliminarColor(color)}}>Borrar</Button>
    </ListGroupItem>
  )
}

export default ItemColor