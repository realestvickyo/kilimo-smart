
-- Kilimo Smart Advisor Pro - Schema Extensions

-- Premium Subscriptions
CREATE TABLE `subscriptions` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `user_id` INT NOT NULL,
  `plan_type` ENUM('free', 'premium') DEFAULT 'free',
  `start_date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `expiry_date` TIMESTAMP,
  `mpesa_trans_id` VARCHAR(50),
  `status` ENUM('active', 'expired', 'pending') DEFAULT 'pending'
);

-- Yield & Profit Tracking
CREATE TABLE `yield_records` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `user_id` INT NOT NULL,
  `season` VARCHAR(50),
  `crop_name` VARCHAR(100),
  `acres_planted` DECIMAL(10,2),
  `input_costs` DECIMAL(15,2), -- Seeds, Fertilizer, Labor
  `harvest_qty` DECIMAL(15,2), -- in Kg or Bags
  `revenue` DECIMAL(15,2),
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Cooperatives / Groups
CREATE TABLE `groups` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `code` VARCHAR(20) UNIQUE,
  `admin_user_id` INT,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Group Membership
CREATE TABLE `group_members` (
  `group_id` INT,
  `user_id` INT,
  `joined_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`group_id`, `user_id`)
);

-- Crowdsourced Price Verification
CREATE TABLE `price_submissions` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `crop` VARCHAR(100),
  `market` VARCHAR(100),
  `price` DECIMAL(10,2),
  `user_id` INT,
  `verified_status` BOOLEAN DEFAULT FALSE,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE `price_votes` (
  `submission_id` INT,
  `user_id` INT,
  `vote_type` ENUM('up', 'down'),
  PRIMARY KEY (`submission_id`, `user_id`)
);
