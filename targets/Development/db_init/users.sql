--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.10
-- Dumped by pg_dump version 9.6.10

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner:
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner:
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: _users; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public.users (
    id SERIAL PRIMARY KEY,
    first_name character varying(8) DEFAULT NULL::character varying,
    last_name character varying(10) DEFAULT NULL::character varying,
    gender character varying(6) DEFAULT NULL::character varying,
    email character varying(25) DEFAULT NULL::character varying,
    company character varying(29) DEFAULT NULL::character varying,
    avatar character varying(25) DEFAULT NULL::character varying
);



--
-- Data for Name: _users; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public.users (first_name, last_name, gender, email, company, avatar) FROM stdin;
Rowena	Pardy	Female	rpardy0@unc.edu	Lehner, Langworth and Hagenes	/assets/img/avatar-1.jpg
Rae	De Bruyne	Female	rdebruyne1@aboutads.info	Bauch-Trantow	/assets/img/avatar-2.jpg
Janeczka	Darke	Female	jdarke2@google.co.jp	Towne, Koch and Wyman	/assets/img/avatar-3.jpg
Niki	Ehlerding	Male	nehlerding3@msu.edu	Rolfson, Nienow and Morar	/assets/img/avatar-7.jpg
Davidde	Hansbury	Male	dhansbury4@nyu.edu	Bailey, Smitham and Runte	/assets/img/avatar-8.jpg
Adan	Sunnucks	Male	asunnucks5@unblog.fr	Flatley-Hackett	/assets/img/avatar-9.jpg
Hugh	Gallen	Male	hgallen6@boston.com	Jakubowski-Crist	/assets/img/avatar-10.jpg
Elva	Abbots	Female	eabbots7@sourceforge.net	Kshlerin, Fadel and Kunze	/assets/img/avatar-4.jpg
Willem	O'Hickey	Male	wohickey8@goo.ne.jp	Wisoky Group	/assets/img/avatar-11.jpg
Major	Dilkes	Male	mdilkes9@yahoo.com	Turcotte LLC	/assets/img/avatar-12.jpg
Rudolfo	Gabbat	Male	rgabbata@list-manage.com	Doyle and Sons	/assets/img/avatar-13.jpg
Egor	Brombell	Male	ebrombellb@blogger.com	Ondricka LLC	/assets/img/avatar-14.jpg
Page	Feeny	Male	pfeenyc@unblog.fr	Jerde, Schmidt and Schumm	/assets/img/avatar-15.jpg
Riordan	Pitkeathly	Male	rpitkeathlyd@discuz.net	Kilback, Halvorson and Torp	/assets/img/avatar-16.jpg
Herold	Smithend	Male	hsmithende@google.co.uk	Steuber-Tillman	/assets/img/avatar-17.jpg
Simone	Feaveer	Female	sfeaveerf@imageshack.us	Spencer Group	/assets/img/avatar-5.jpg
Sim	Leaton	Male	sleatong@google.nl	Wuckert Group	/assets/img/avatar-18.jpg
Malvin	Markushkin	Male	mmarkushkinh@yale.edu	Lockman Inc	/assets/img/avatar-19.jpg
Darnall	De Vile	Male	ddevilei@marriott.com	Wisoky, Kiehn and Berge	/assets/img/avatar-20.jpg
Jaquelyn	Sinnatt	Female	jsinnattj@cyberchimps.com	Lebsack, Wisozk and Kuhlman	/assets/img/avatar-6.jpg
\.


--
-- PostgreSQL database dump complete
--

