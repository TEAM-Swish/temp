import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getDrivers } from '../../../Shared/services/driver'

import DriverItem from './item'

export default function Driver() {
  const [drivers, setDrivers] = useState([])

  const getDriverData = async () => {
    const data = await getDrivers()
    setDrivers(data)
  }
  useEffect(() => {
    getDriverData()
  })

  return (
    <Wrapper>
      <P>Best drivers around you</P>
      <ItemWrapper>
        {drivers?.slice(0, 8).map((v: any, i) => (
          <DriverItem key={i} name={v.name} avatarUrl={v.avatarUrl} id={v.id} />
        ))}
      </ItemWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const P = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1.6rem;
`
const ItemWrapper = styled.div`
  display: flex;
  width: 100%;
  overflow-x: scroll;
  padding-right: -1.8rem;
`
