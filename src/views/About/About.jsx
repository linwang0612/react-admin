import React, { Component } from 'react'
import { Layout, Divider } from 'antd'
import CustomBreadcrumb from '../../components/CustomBreadcrumb'

class AboutView extends Component {
    render() {
        return (
            <Layout>
                <div>
                    <CustomBreadcrumb arr={['关于']}></CustomBreadcrumb>
                </div>
            </Layout>
        )
    }
}

export default AboutView
