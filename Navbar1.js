import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./ComponenteCSS/Navbar1.scss";


const Navbar1 = () => {
    const [language, setLanguage] = useState("EN");
    const [isActive, setIsActive] = useState(false);

    const toggleLanguage = () => {
        if (language === "PT") {
            setLanguage("EN");
        } else {
            setLanguage("PT");
        }
    };

    const handleToggle = () => {
        setIsActive(!isActive);
    };

    const navbarItems = {
        EN: {
            escritorio: "ESCRITÓRIO",
            areasAtuacao: "ÁREAS DE ATUAÇÃO",
            sobreNos: "SOBRE NÓS",
            quemSomos: "QUEM SOMOS",
            processoSeletivo: "PROCESSO SELETIVO",
            cadastro: "CADASTRO",
            contato: "CONTATO",
            linkedin: "LinkedIn",
            agronegocios: "AGRONEGÓCIOS",
            bancarioETransacoesFinanceiras: "BANCARIO E TRANSAÇÕES FINANCEIRAS",
            biocombustiveis: "BIOCOMBUSTÍVEIS",
            contenciosoCivel: "CONTENCIOSO CÍVEL",
            contratos: "CONTRATOS",
            direitoPenalFinanceiro: "DIREITO PENAL FINANCEIRO",
            energiaRenovavel: "ENERGIA RENOVÁVEL",
            familiaESucessoes: "FAMÍLIA E SUCESSÕES",
            gestaoPatrimonial: "GESTÃO PATRIMONIAL",
            litigiosSocietariosEComerciais: "LITÍGIOS SOCIETÁRIOS E COMERCIAIS",
            negociosImobiliarios: "NEGÓCIOS IMOBILIÁRIOS",
            previdenciario: "PREVIDENCIÁRIO",
            propriedadeIntelectual: "PROPRIEDADE INTELECTUAL",
            recuperacaoTributaria: "RECUPERAÇÃO TRIBUTRIA",
            reestruturacaoEInsolvencia: "REESTRUTURAÇÃO E INSOLVÊNCIA",
            relacoesDeConsumo: "RELAÇÕES DE CONSUMO",
            relacoesGovernamentais: "RELAÇÕES GOVERNAMENTAIS",
            saudeEAcessibilidade: "SAÚDE E ACESSIBILIDADE",
            segurosEResseguros: "SEGUROS E RESSEGUROS",
            tecnologia: "TECNOLOGIA",
            trabalhista: "TRABALHISTA",
            tributario: "TRIBUTÁRIO",
            ventureCapitalEStartups: "VENTURE CAPITAL E STARTUPS"
        },
        PT: {
            escritorio: "OFFICE",
            areasAtuacao: "PRACTICE AREAS",
            sobreNos: "ABOUT US",
            quemSomos: "WHO WE ARE",    
            processoSeletivo: "CAREERS",
            cadastro: "SIGN UP",
            contato: "CONTACT",
            linkedin: "LinkedIn",
            agronegocios: "AGRICULTURE",
            bancarioETransacoesFinanceiras: "BANKING AND FINANCIAL TRANSACTIONS",
            biocombustiveis: "BIOFUELS",
            contenciosoCivel: "CIVIL LITIGATION",
            contratos: "CONTRACTS",
            direitoPenalFinanceiro: "FINANCIAL CRIMINAL LAW",
            energiaRenovavel: "RENEWABLE ENERGY",
            familiaESucessoes: "FAMILY AND SUCCESSION",
            gestaoPatrimonial: "ASSET MANAGEMENT",
            litigiosSocietariosEComerciais: "CORPORATE AND COMMERCIAL LITIGATION",
            negociosImobiliarios: "REAL ESTATE",
            previdenciario: "SOCIAL SECURITY",
            propriedadeIntelectual: "INTELLECTUAL PROPERTY",
            recuperacaoTributaria: "TAX RECOVERY",
            reestruturacaoEInsolvencia: "RESTRUCTURING AND INSOLVENCY",
            relacoesDeConsumo: "CONSUMER RELATIONS",
            relacoesGovernamentais: "GOVERNMENT RELATIONS",
            saudeEAcessibilidade: "HEALTH AND ACCESSIBILITY",
            segurosEResseguros: "INSURANCE AND REINSURANCE",
            tecnologia: "TECHNOLOGY",
            trabalhista: "LABOR",
            tributario: "TAX",
            ventureCapitalEStartups: "VENTURE CAPITAL AND STARTUPS"
        }
    };

    return (
        <Navbar expand="lg">
            <Navbar.Brand as={Link} to="/">
                <img
                    src="/assets/img/Logo.png"
                    className="logo"
                    alt="CQL Advogados"
                    title="CQL Advogados"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="menu-items" className={`navbar-toggler ${isActive ? 'active' : ''}`} onClick={handleToggle}>
                <div className="navbar-toggler-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </Navbar.Toggle>
            <Navbar.Collapse id="menu-items">
                <Nav className="main-menu">
                    <Nav.Link as={Link} to="/">{navbarItems[language].escritorio}</Nav.Link>
                    <NavDropdown title={navbarItems[language].areasAtuacao} id="navbar-areas-de-atuacao" className="containergrid">
                        <Container>
                            <div className="row">
                                <div className="col-md-4">
                                    <NavDropdown.Item as={Link} to="/areas/#agronegocios">{navbarItems[language].agronegocios}</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/areas/#bancario-e-transacoes-financeiras">{navbarItems[language].bancarioETransacoesFinanceiras}</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/areas/#biocombustiveis">{navbarItems[language].biocombustiveis}</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/areas/#contencioso-civel">{navbarItems[language].contenciosoCivel}</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/areas/#contratos">{navbarItems[language].contratos}</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/areas/#direito-penal-financeiro">{navbarItems[language].direitoPenalFinanceiro}</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/areas/#energia-renovavel">{navbarItems[language].energiaRenovavel}</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/areas/#familia-e-sucessoes">{navbarItems[language].familiaESucessoes}</NavDropdown.Item>
                                </div>
                                <div className="col-md-4">
                                    <NavDropdown.Item as={Link} to="/areas/#gestao-patrimonial">{navbarItems[language].gestaoPatrimonial}</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/areas/#litigios-societarios-e-comerciais">{navbarItems[language].litigiosSocietariosEComerciais}</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/areas/#negocios-imobiliarios">{navbarItems[language].negociosImobiliarios}</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/areas/#previdenciario">{navbarItems[language].previdenciario}</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/areas/#propriedade-intelectual">{navbarItems[language].propriedadeIntelectual}</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/areas/#recuperacao-tributaria">{navbarItems[language].recuperacaoTributaria}</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/areas/#reestruturacao-e-insolvencia">{navbarItems[language].reestruturacaoEInsolvencia}</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/areas/#relacoes-de-consumo">{navbarItems[language].relacoesDeConsumo}</NavDropdown.Item>
                                </div>
                                <div className="col-md-4">
                                    <NavDropdown.Item as={Link} to="/areas/#relacoes-governamentais">{navbarItems[language].relacoesGovernamentais}</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/areas/#saude-e-acessibilidade">{navbarItems[language].saudeEAcessibilidade}</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/areas/#seguros-e-resseguros">{navbarItems[language].segurosEResseguros}</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/areas/#tecnologia">{navbarItems[language].tecnologia}</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/areas/#trabalhista">{navbarItems[language].trabalhista}</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/areas/#tributario">{navbarItems[language].tributario}</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/areas/#venture-capital-e-startups">{navbarItems[language].ventureCapitalEStartups}</NavDropdown.Item>
                                </div>
                            </div>
                        </Container>
                    </NavDropdown>
                    <Nav.Link as={Link} to="/contato">{navbarItems[language].contato}</Nav.Link>
                    <NavDropdown title={navbarItems[language].sobreNos} id="navbar-about-us">
                        <Container>
                            <NavDropdown.Item as={Link} to="/QuemSomos">{navbarItems[language].quemSomos}</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/ProcessoSeletivo">{navbarItems[language].processoSeletivo}</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/AreasPage">{navbarItems[language].areasAtuacao}</NavDropdown.Item>
                        </Container>
                    </NavDropdown>
                    <Nav.Link as={Link} to="/Cadastro">{navbarItems[language].cadastro}</Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/company/cqladv/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/img/linkedin-blue.svg" className="linkedin" alt={navbarItems[language].linkedin} title={navbarItems[language].linkedin} />
                    </Nav.Link>
                    <a href="#" className="language-button1" onClick={toggleLanguage}>{language}</a>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navbar1;
