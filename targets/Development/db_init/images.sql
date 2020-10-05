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
-- Name: _images; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public.images (
    id SERIAL PRIMARY KEY,
    image character varying(30) DEFAULT NULL::character varying,
    description character varying(20) DEFAULT NULL::character varying,
    category character varying(12) DEFAULT NULL::character varying,
    author character varying(18) DEFAULT NULL::character varying,
    date date
);



--
-- Data for Name: _images; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public.images (image, description, category, author, date) FROM stdin;
/assets/img/food-1.jpg	Food photo 1	food	Lily Banse	2018-04-01
/assets/img/nature-2.jpg	Nature photo 2	nature	Winn Pellew	2018-07-20
/assets/img/wildlife-3.jpg	Wildlife photo 3	wildlife	Kalila Moffat	2019-07-21
/assets/img/architecture-1.jpg	Architecture photo 1	architecture	Patrick Tomasso	2016-06-30
/assets/img/food-2.jpg	Food photo 2	food	Eiliv-Sonas Aceron	2017-06-25
/assets/img/wildlife-4.jpg	Wildlife photo 4	wildlife	Filippo Hannum	2015-03-11
/assets/img/food-3.jpg	Food photo 3	food	Ringo Crockett	2018-08-14
/assets/img/nature-3.jpg	Nature photo 3	nature	Ulla McGivena	2017-05-21
/assets/img/architecture-2.jpg	Architecture photo 2	architecture	Liam Pozz	2015-04-11
/assets/img/nature-4.jpg	Nature photo 4	nature	Dulci Morrott	2017-12-03
/assets/img/architecture-3.jpg	Architecture photo 3	architecture	Joel Filipe	2019-06-24
/assets/img/fineart-1.jpg	Fine Art photo 1	fine art	Jue Huang	2015-11-27
/assets/img/food-4.jpg	Food photo 4	food	Felice Summerside	2015-08-17
/assets/img/food-5.jpg	Food photo 5	food	Thomasin Osment	2017-09-23
/assets/img/nature-1.jpg	Nature photo 1	nature	Brian Krahl	2018-02-07
/assets/img/wildlife-1.jpg	Wildlife photo 1	wildlife	Rakel Lumox	2018-05-26
/assets/img/fineart-2.jpg	Fine Art photo 2	fine art	Raychan Jones	2019-03-14
/assets/img/architecture-4.jpg	Architecture photo 4	architecture	Claudio Testa	2015-01-04
/assets/img/wildlife-2.jpg	Wildlife photo 2	wildlife	Timmie Middlebrook	2018-10-03
/assets/img/fineart-3.jpg	Fine Art photo 3	fine art	Federico Passi	2015-11-14
\.


--
-- PostgreSQL database dump complete
--

