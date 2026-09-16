-- ============================================================
-- AWS Exam Practice — Database Schema
-- Run this in the Supabase SQL Editor
-- ============================================================

-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================
-- 1. Domains Table
-- ============================================================
CREATE TABLE IF NOT EXISTS domains (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  domain_number INT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  weight_percentage INT NOT NULL,
  color TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Seed domain data
INSERT INTO domains (domain_number, name, description, weight_percentage, color) VALUES
  (1, 'Cloud Concepts', 'Define the benefits of the AWS Cloud, identify design principles, understand migration strategies, and cloud economics.', 24, '#3B82F6'),
  (2, 'Security and Compliance', 'Understand the AWS shared responsibility model, cloud security, governance, compliance, and access management.', 30, '#F59E0B'),
  (3, 'Cloud Technology and Services', 'Define methods of deploying/operating in AWS, global infrastructure, compute, database, network, storage, AI/ML services.', 34, '#10B981'),
  (4, 'Billing, Pricing, and Support', 'Compare AWS pricing models, understand billing/cost management resources, and identify technical support resources.', 12, '#8B5CF6');

-- ============================================================
-- 2. Exam Attempts Table
-- Tracks each quiz/exam session.
-- user_id is nullable — will be populated when auth is added.
-- ============================================================
CREATE TABLE IF NOT EXISTS exam_attempts (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID NULL,  -- Will link to auth.users when auth is implemented
  session_id TEXT NOT NULL,
  mode TEXT NOT NULL CHECK (mode IN ('practice', 'exam')),
  scope TEXT NOT NULL CHECK (scope IN ('full_exam', 'domain_1', 'domain_2', 'domain_3', 'domain_4')),
  total_questions INT NOT NULL,
  correct_answers INT NOT NULL,
  score_percentage DECIMAL NOT NULL,
  scaled_score INT NOT NULL,
  passed BOOLEAN NOT NULL DEFAULT FALSE,
  time_taken_seconds INT NOT NULL,
  started_at TIMESTAMPTZ NOT NULL,
  completed_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for querying by session
CREATE INDEX IF NOT EXISTS idx_exam_attempts_session ON exam_attempts (session_id);
-- Index for future user queries
CREATE INDEX IF NOT EXISTS idx_exam_attempts_user ON exam_attempts (user_id);

-- ============================================================
-- 3. User Answers Table
-- Stores individual answers for each attempt.
-- ============================================================
CREATE TABLE IF NOT EXISTS user_answers (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  attempt_id UUID NOT NULL REFERENCES exam_attempts(id) ON DELETE CASCADE,
  question_id TEXT NOT NULL,
  selected_answers TEXT[] NOT NULL DEFAULT '{}',
  is_correct BOOLEAN NOT NULL DEFAULT FALSE,
  question_order INT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for querying answers by attempt
CREATE INDEX IF NOT EXISTS idx_user_answers_attempt ON user_answers (attempt_id);

-- ============================================================
-- 4. Row Level Security (RLS)
-- Currently permissive since there's no auth yet.
-- When auth is added, update policies to filter by user_id.
-- ============================================================

ALTER TABLE domains ENABLE ROW LEVEL SECURITY;
ALTER TABLE exam_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_answers ENABLE ROW LEVEL SECURITY;

-- Domains are publicly readable
CREATE POLICY "Domains are viewable by everyone"
  ON domains FOR SELECT
  USING (true);

-- Exam attempts — anyone can insert (no auth yet)
CREATE POLICY "Anyone can insert exam attempts"
  ON exam_attempts FOR INSERT
  WITH CHECK (true);

-- Exam attempts — read own attempts by session_id
CREATE POLICY "Anyone can view exam attempts"
  ON exam_attempts FOR SELECT
  USING (true);

-- User answers — anyone can insert
CREATE POLICY "Anyone can insert user answers"
  ON user_answers FOR INSERT
  WITH CHECK (true);

-- User answers — read via attempt
CREATE POLICY "Anyone can view user answers"
  ON user_answers FOR SELECT
  USING (true);

-- ============================================================
-- NOTES:
-- When adding authentication later:
-- 1. Add auth reference: ALTER TABLE exam_attempts ADD CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES auth.users(id);
-- 2. Update RLS policies to filter by auth.uid()
-- 3. Existing anonymous attempts (user_id = NULL) will remain accessible
-- 4. Add a migration to link old session_id-based attempts to new user accounts
-- ============================================================
