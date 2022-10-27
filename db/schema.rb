# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_10_27_153006) do
  create_table "blogs", force: :cascade do |t|
    t.string "title"
    t.text "post"
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_blogs_on_user_id"
  end

  create_table "companies", force: :cascade do |t|
    t.string "name"
    t.string "tax_number"
    t.text "description"
    t.integer "total_donation"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "donations", force: :cascade do |t|
    t.integer "amount"
    t.integer "user_id", null: false
    t.integer "company_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["company_id"], name: "index_donations_on_company_id"
    t.index ["user_id"], name: "index_donations_on_user_id"
  end

  create_table "response_blogs", force: :cascade do |t|
    t.text "post"
    t.integer "blog_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["blog_id"], name: "index_response_blogs_on_blog_id"
    t.index ["user_id"], name: "index_response_blogs_on_user_id"
  end

  create_table "trips", force: :cascade do |t|
    t.string "location"
    t.datetime "start_time"
    t.datetime "end_time"
    t.integer "spots"
    t.integer "cost_per_person"
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "title"
    t.text "description"
    t.index ["user_id"], name: "index_trips_on_user_id"
  end

  create_table "user_trips", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "trip_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "amount"
    t.integer "spaces"
    t.index ["trip_id"], name: "index_user_trips_on_trip_id"
    t.index ["user_id"], name: "index_user_trips_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.integer "phone_number"
    t.string "password_digest"
    t.boolean "employee", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "blogs", "users"
  add_foreign_key "donations", "companies"
  add_foreign_key "donations", "users"
  add_foreign_key "response_blogs", "blogs"
  add_foreign_key "response_blogs", "users"
  add_foreign_key "trips", "users"
  add_foreign_key "user_trips", "trips"
  add_foreign_key "user_trips", "users"
end
