import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="logo" />
      <Title>Explore repositórios no Github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/59899836?s=460&u=7e0242ab55550e235d55f0ba674ec08123f5ddbc&v=4"
            alt="Lucas Gimenes"
          />
          <div>
            <strong>lucas.gimenesbittenbinder</strong>
            <p>Bem-vindo ao meu primeiro repositório com o React.JS</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/59899836?s=460&u=7e0242ab55550e235d55f0ba674ec08123f5ddbc&v=4"
            alt="Lucas Gimenes"
          />
          <div>
            <strong>lucas.gimenesbittenbinder</strong>
            <p>Bem-vindo ao meu primeiro repositório com o React.JS</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/59899836?s=460&u=7e0242ab55550e235d55f0ba674ec08123f5ddbc&v=4"
            alt="Lucas Gimenes"
          />
          <div>
            <strong>lucas.gimenesbittenbinder</strong>
            <p>Bem-vindo ao meu primeiro repositório com o React.JS</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
