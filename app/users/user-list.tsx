'use client';

import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { User } from './user';
import { Button } from 'primereact/button';

export default function UsersTable({ users }: { users: User[] }) {
  return (
    <div className="card">
      <DataTable
        value={users}
        paginator
        rows={10}
        dataKey="name"
        filterDisplay="row"
        emptyMessage="No customers found."
      >
        <Column
          field="name"
          header="Name"
          filter
          filterPlaceholder="Search by users"
          style={{ minWidth: '12rem' }}
        />
        <Column
          field="age"
          header="Age"
          filter
          filterPlaceholder="Search by age"
          style={{ minWidth: '12rem' }}
        />
      </DataTable>
    </div>
  );
}
