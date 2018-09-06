class RenameBookHometownToNationality < ActiveRecord::Migration[5.1]
  def change
    rename_column :books, :hometown, :nationality
  end
end
