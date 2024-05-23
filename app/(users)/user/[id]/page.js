"use client"
import React, {useEffect, useState} from 'react';
import styles from "./styles.module.css"
import Api from "../../../../utils/api";
import {useParams} from "next/navigation";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../../../../redux/appSlices/userSlice";
import {fetchSingleUsers} from "../../../../redux/appSlices/singleUser";
import Loading from "../../../_component/loading/loading";
const Page = () => {

  const params = useParams()


  const {data, status, error} = useSelector((state) => state.single);

  const dispatch = useDispatch();

  useEffect(() => {
       dispatch(fetchSingleUsers(params?.id)); // Fetch the first page of users
  }, [dispatch]);


  return (
    <div className={styles.single_page}>
      <div className={styles.single_page_box}>
        {
          (status === "loading" || !data?.first_name) ?
          <div>
            <Loading/>
          </div>
            :
            <>
              <img src={data?.avatar}/>
              <div>
                {`name : ${data?.first_name}  ${data?.last_name}`}
              </div>
              <div>
                {`email : ${data?.email}`}
              </div>
            </>
        }

      </div>
      {

      }
    </div>
  );
};

export default Page;
