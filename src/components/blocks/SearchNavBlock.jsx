import styled from '@emotion/styled'
import { Box, Button } from '@mui/material'
const NavContainer = styled(Box)`
    position: absolute;
    top:0;
    right:54px;
`
function SearchNavBlock() {
  return (
    <NavContainer>
        <Button variant='search_nav'>
            вернуться к <br/>проекту мир
        </Button>
    </NavContainer>
  )
}

export default SearchNavBlock