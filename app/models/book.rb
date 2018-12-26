class Book < ApplicationRecord
  validates :goodid, presence: true, uniqueness: true, :on => :create
  has_and_belongs_to_many :genres
end
