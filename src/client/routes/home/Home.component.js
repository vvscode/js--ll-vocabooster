import React, { Fragment } from 'react';
import { Icon, Step, Button, Loader } from 'semantic-ui-react';

import CredentialsForm from 'client/components/CredentialsForm';
import TextSourceForm from 'client/components/TextSourceForm';
import TableOfWords from 'client/components/TableOfWords';
import {
  getWords,
  checkCredentials,
  addWordsToLingualeoVocabulary,
} from 'client/utils/api';

const steps = [
  { name: 'newspaper', text: 'Add text' },
  { name: 'pencil', text: 'Check new words' },
  { name: 'user circle', text: 'Auth' },
  { name: 'cloud upload', text: 'Save new words' },
];

export default class HomeComponent extends React.Component {
  static propTypes = {};

  state = {
    activeStepNum: 0,
    login: '',
    password: '',
    words: [],
    loading: false,
  };

  handleSourceForm = ({ text }) => {
    this.enableLoading();
    getWords(text)
      .then(words =>
        this.setState({ words: words.map(i => ({ ...i, selected: true })) }),
      )
      .then(() => this.disableLoading())
      .then(() => this.nextStep());
  };

  handleCredentialsForm = ({ login, password }) => {
    this.enableLoading();
    checkCredentials(login, password)
      .then(() => {
        this.setState({ login, password, loading: false });
        this.nextStep();
      })
      .catch(err => {
        this.disableLoading();
        console.error('handleCredentialsForm:', err);
      });
  };

  handleWordsForm = ({ words }) => {
    this.setState({ words });
    this.nextStep();
  };

  handleWordsUpload = () => {
    this.enableLoading();
    addWordsToLingualeoVocabulary(
      this.state.login,
      this.state.password,
      this.state.words,
    ).then(() => {
      this.disableLoading();
      this.setState({ words: [] });
      this.nextStep();
    });
  };

  enableLoading = () => this.setState({ loading: true });
  disableLoading = () => this.setState({ loading: false });

  nextStep = () =>
    this.setState({ activeStepNum: (this.state.activeStepNum + 1) % 4 });

  renderStep0 = () => <TextSourceForm onSubmit={this.handleSourceForm} />;

  renderStep1 = () => (
    <TableOfWords words={this.state.words} onSubmit={this.handleWordsForm} />
  );

  renderStep2 = () => (
    <CredentialsForm
      login={this.state.login}
      password={this.state.password}
      onSubmit={this.handleCredentialsForm}
    />
  );

  renderStep3 = () => (
    <div>
      <Button
        loading={this.state.loading}
        primary
        onClick={this.handleWordsUpload}
      >
        Save words in Lingualeo Vocabulary
      </Button>
    </div>
  );

  renderStep() {
    const { activeStepNum, loading } = this.state;
    if (loading) {
      return <Loader active inline="centered" />;
    }
    if (`renderStep${activeStepNum}` in this) {
      return this[`renderStep${activeStepNum}`]();
    }
    return null;
  }
  renderStepsHeader() {
    const { activeStepNum } = this.state;
    return (
      <Step.Group>
        {steps.map((step, index) => (
          <Step
            active={index === activeStepNum}
            completed={index < activeStepNum}
            disabled={index > activeStepNum}
          >
            <Icon name={step.name} />
            <Step.Content>
              <Step.Title>{step.text}</Step.Title>
            </Step.Content>
          </Step>
        ))}
      </Step.Group>
    );
  }

  render() {
    return (
      <Fragment>
        {this.renderStepsHeader()}
        <Fragment>{this.renderStep()}</Fragment>
      </Fragment>
    );
  }
}
