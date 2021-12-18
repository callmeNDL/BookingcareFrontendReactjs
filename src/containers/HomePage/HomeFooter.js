import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
class HomeFooter extends Component {

    state = {

    }

    componentDidMount() {
    }


    render() {
        return (
            <div className="home-footer" >
                
                <p>&copy; 2021 nguyenduclong.com <a target='_blank' href='https://github.com/callmeNDL'>More information Github .&#8594; Click here &#8592;</a></p>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
