-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 02, 2020 at 03:49 PM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `react_assignment`
--

-- --------------------------------------------------------

--
-- Table structure for table `crud`
--

CREATE TABLE `crud` (
  `id` int(11) NOT NULL,
  `fname` varchar(200) NOT NULL,
  `lname` varchar(200) NOT NULL,
  `visible` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `crud`
--

INSERT INTO `crud` (`id`, `fname`, `lname`, `visible`) VALUES
(1, 'sdfhsdjh', 'sdkfsdlkfj', 0),
(2, 'sdfhsdjh', 'sdkfsdlkfj', 0),
(3, 'sdfhsdjh', 'sdkfsdlkfj', 0);

-- --------------------------------------------------------

--
-- Table structure for table `crudsection`
--

CREATE TABLE `crudsection` (
  `id` int(11) NOT NULL,
  `fname` varchar(200) NOT NULL,
  `lname` varchar(200) NOT NULL,
  `visible` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `crudsection`
--

INSERT INTO `crudsection` (`id`, `fname`, `lname`, `visible`) VALUES
(1, 'ewfsdf', 'fdsfsdfsd', 0),
(2, 'ewfsdf', 'fdsfsdfsd', 0),
(3, 'ewfsdf', 'fdsfsdfsd', 0),
(4, 'ewfsdf', 'fdsfsdfsd', 0),
(5, 'ewfsdf', 'fdsfsdfsd', 1),
(6, 'ewfsdf', 'fdsfsdfsd', 1),
(7, 'ewfsdf', 'fdsfsdfsd', 1),
(8, 'ewfsdf', 'fdsfsdfsd', 1),
(9, 'fsdf', 'dsfsdf', 1),
(10, 'fsdf', 'dsfsdf', 1),
(11, 'fsdf', 'dsfsdf', 1),
(12, 'dsfsd', 'dsfsdfa', 1),
(13, 'dsfsd', 'dsfsdfa', 1),
(14, 'Mickey', 'dsd', 1),
(15, 'ds', 'ds', 1),
(16, 'ds', 'ds', 1);

-- --------------------------------------------------------

--
-- Table structure for table `fileupload`
--

CREATE TABLE `fileupload` (
  `id` int(11) NOT NULL,
  `filename` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `selectname`
--

CREATE TABLE `selectname` (
  `id` int(11) NOT NULL,
  `selectname` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `selectname`
--

INSERT INTO `selectname` (`id`, `selectname`) VALUES
(9, 'singh01');

-- --------------------------------------------------------

--
-- Table structure for table `selectoption`
--

CREATE TABLE `selectoption` (
  `id` int(11) NOT NULL,
  `selectname` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `selectoption`
--

INSERT INTO `selectoption` (`id`, `selectname`) VALUES
(1, 'hj');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fname` varchar(200) NOT NULL,
  `lname` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fname`, `lname`, `email`, `password`) VALUES
(1, 'hello', 'hello', 'hello@gmail.com', 'hello'),
(3, 'test', 'test last name', 'thisistest@gmail.com', 'hellotestabcd'),
(4, 'singh45', 'singh001', 'singh@gmail.com', 'singh@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `crud`
--
ALTER TABLE `crud`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `crudsection`
--
ALTER TABLE `crudsection`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `fileupload`
--
ALTER TABLE `fileupload`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `selectname`
--
ALTER TABLE `selectname`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `selectoption`
--
ALTER TABLE `selectoption`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `crud`
--
ALTER TABLE `crud`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `crudsection`
--
ALTER TABLE `crudsection`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `fileupload`
--
ALTER TABLE `fileupload`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `selectname`
--
ALTER TABLE `selectname`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `selectoption`
--
ALTER TABLE `selectoption`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
