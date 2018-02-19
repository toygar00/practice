import React from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';
import { reduxForm } from 'redux-form';

class SurveyNew extends React.Component {
    state = { showFormReview: false };

    _handleSurveySubmit = () => {
        this.setState({
            showFormReview: true,
        })
    }

    _handleCancel = () => {
        this.setState({
            showFormReview: false,
        })
    }

    renderContent() {
        if (this.state.showFormReview) {
            return <SurveyFormReview onCancel={this._handleCancel} />;
        }

        return <SurveyForm onSurveySubmit={this._handleSurveySubmit} />;
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

export default reduxForm({
    form: 'surveyForm', // dump values if surveyNew is unmounted
})(SurveyNew);