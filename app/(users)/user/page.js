'use client'
import React, {useEffect, useState} from 'react';
import styles from './styles.module.css'
import Api from "../../../utils/api";
import UserListItem from "../../_component/userListItem/userListItem";
import Pagination from "../../_component/pagination/pagination";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers, setPage} from "../../../redux/appSlices/userSlice";
import Loading from "../../_component/loading/loading";

const Page = () => {

  const {list, pagination, status, error} = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (list?.length === 0)
      dispatch(fetchUsers(1)); // Fetch the first page of users
  }, [dispatch]);

  const handleChangePage = (page) => {
    dispatch(fetchUsers(page)); // Fetch the first page of users
  }


  return (
    <div className={styles.user_main_list}>
      <div className={styles.user_container}>
        {
          list?.map((item) => {
            return (
              <UserListItem
                avatar={item?.avatar}
                email={item?.email}
                first_name={item?.first_name}
                last_name={item?.last_name}
                id={item?.id}
              />
            )
          })
        }
        {
          status === "loading" || list?.length === 0 &&
          <div>
            <Loading/>
          </div>
        }
        {
          list?.length > 0 &&
          <Pagination itemsPerPage={5} total={pagination?.totalPages} item={list}
                      changePage={(page) => handleChangePage(page)}/>
        }

      </div>
    </div>
  );
};

export default Page;
