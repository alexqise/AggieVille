import React from "react"
import { flexRender, useReactTable, getCoreRowModel, getSortedRowModel, getFilteredRowModel, getPaginationRowModel } from "@tanstack/react-table"
import mainData from "./data.json"
import { columnDef } from "./columns"
import "./table.css"

// These imports are all to make the table have google material UI
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// made this using htis tutorial: https://www.youtube.com/watch?v=fL8VlLe8Upo&list=PLcuAByNrzwnj1az88-vpnwj-tDp4eCwXi

export default function CustomTable() {


    // useMemo will only recompute the memorized value when a depedency has changed
    const finalData = React.useMemo(() => mainData, [])
    const finalColumnDef = React.useMemo(() => columnDef, []) 
    // need to use a state for sorting
    const [sorting, setSorting] = React.useState([]);
    const [filtering, setFiltering] = React.useState("");

    // creating an instance to hold the data and columns of our table
    const tableInstance = useReactTable({
        columns: finalColumnDef,
        data: finalData,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),        
        getPaginationRowModel: getPaginationRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        // These changes bind the local state to the table state aka allow the useState hook to work on table
        state: {
            sorting: sorting,
            globalFilter: filtering,
        },
        onSortingChange: setSorting,
        onGlobalFilterChange: setFiltering,
    })

    return <div>
        {/* Adds a search bar that globally filters */}
        <div className="search">
            <h5>Search</h5>
            <input type='text' value = { filtering } onChange={ e => setFiltering(e.target.value)}></input>
        </div>
        {/* Buttons for jumping to page and also */}
        <div className="button-container">
            <button onClick ={()=> tableInstance.previousPage()} disabled={!tableInstance.getCanPreviousPage()}>&lt; Prev</button>
            <input type='number' value= {tableInstance.options.state.pagination.pageIndex} onChange={ e => tableInstance.setPageIndex(e.target.value)}></input>
            <button onClick ={()=> tableInstance.nextPage()} disabled={!tableInstance.getCanNextPage()}>Next &gt;</button>
        </div>
        <TableContainer component={Paper}>
        <Table sx={{minWidth:650}} aria-label="simple table">
            <TableHead> 
            {/* This essentially maps over all the header elements specified in the data and displays them */}
            {tableInstance.getHeaderGroups().map((headerElement) => {
                    return <TableRow key={headerElement.id}>{headerElement.headers.map(columnElement => {
                        return <TableCell key={columnElement.id} colSpan={columnElement.colSpan} onClick={ columnElement.column.getToggleSortingHandler() }>
                            <>{
                                flexRender(
                                columnElement.column.columnDef.header,
                                columnElement.getContext()
                            )} 
                            </>
                            {{ // adds up and down sorting using unicde values of up and down arrow
                                asc: " \u2191", desc: " \u2193"}[columnElement.column.getIsSorted() ?? null]}
                        </TableCell>
                    })}</TableRow>;
                })}
            </TableHead>
            <TableBody>
            {/* Maps over all the regular cell elements and displays the data */}
                {tableInstance.getRowModel().rows.map(rowElement => {
                    return <TableRow key={rowElement.id}>
                        {rowElement.getVisibleCells().map(cellElement => {
                            return <TableCell key={cellElement.id}>
                                {flexRender(
                                    cellElement.column.columnDef.cell,
                                    cellElement.getContext())}
                            </TableCell>
                        })}
                    </TableRow>
                })}
            </TableBody>
        </Table>
        </TableContainer>
        {/* Add pagination */}
        <select value={tableInstance.options.state.pagination.pageSize} 
        onChange={(e=> tableInstance.setPageSize(e.target.value))}>
            {[10,25,50].map(pageSizeElement => {
                return (<option key={pageSizeElement} value={pageSizeElement}>
                    {pageSizeElement}
                    </option>
            );
            })}
        </select>
    </div>
}