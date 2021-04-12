import React from 'react'
import CostumHooks from './Costum Hooks/CostumHooks'
import Count from './Count/Count/Count'
import UseRef from './Count/UseRef/UseRef'
import Loading from './toast and loading/Loading';
import UseMemo from './useMemo/UseMemo'

export default function Dashboard() {
    return (
        <div>
            <Count />
            <br/>
            <br/>
            <hr/>
            <hr/>
            <UseRef />
            <br/>
            <br/>
            <hr/>
            <hr/>
            <Loading/>
            <br/>
            <br/>
            <hr/>
            <hr/>
            <UseMemo />
            <br/>
            <br/>
            <hr/>
            <hr/>
            <CostumHooks />
            <br/>
            <br/>
            <hr/>
            <hr/>
        </div>
    )
}
