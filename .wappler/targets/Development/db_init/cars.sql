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
-- Name: _cars; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public.cars (
    id SERIAL PRIMARY KEY,
    make character varying(10) DEFAULT NULL::character varying,
    model character varying(12) DEFAULT NULL::character varying,
    year smallint
);


--
-- Data for Name: _cars; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public.cars (make, model, year) FROM stdin;
Isuzu	Hombre Space	1998
Buick	Terraza	2007
Mazda	Miata MX-5	1997
Ford	Escort	1993
Kia	Sedona	2006
Acura	TL	2009
Dodge	Stealth	1994
GMC	Yukon XL	2006
Acura	RL	2011
Toyota	Prius	2007
Mazda	RX-8	2004
Dodge	Omni	1978
Chevrolet	Malibu	2000
Toyota	Tacoma Xtra	1998
Mitsubishi	Pajero	1986
Oldsmobile	Silhouette	2001
Kia	Optima	2012
Chevrolet	Lumina	1999
Nissan	Versa	2008
Lexus	RX	2011
\.


--
-- PostgreSQL database dump complete
--

