import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { useParams } from 'react-router'
import DetailOrchid from '../components/Orchids/DetailOrchid'

function Detail() {
    return (
        <div>
            <DetailOrchid />
        </div>
    )
}

export default Detail